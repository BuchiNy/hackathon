"use client";
import { Amplify } from "aws-amplify";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { getUser } from "@/graphql/queries";
import type { GetUserQuery, GetUserQueryVariables } from "@/API";
import SideNav from "./libs/components/sidenav-link";
import config from "../../amplifyconfiguration.json";

Amplify.configure(config);
const client = generateClient();

export default function DashboardLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState<GetUserQuery["getUser"] | null>(
    null
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getCurrentUser();

        const result = await client.graphql({
          query: getUser,
          variables: { id: user.userId },
        });

        // Narrow the result type
        if ("data" in result) {
          setUserData(result.data.getUser ?? null);
          console.log("User data fetched:", result.data.getUser);
        } else {
          console.warn("GraphQL result does not contain 'data':", result);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-surface-100">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-white text-surface-900">
        {userData ? (
          <>
            <p className="text-sm text-gray-600 mb-2">
              Welcome, {userData.name}
            </p>
            {children}
          </>
        ) : (
          <p className="animate-pulse text-gray-500">Loading dashboard...</p>
        )}
      </div>
    </div>
  );
}
