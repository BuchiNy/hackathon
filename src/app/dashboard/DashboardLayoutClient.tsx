"use client";
import { Amplify } from "aws-amplify";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { getUser } from "@/graphql/queries";
import type { GetUserQuery, GetUserQueryVariables } from "@/API";
import config from "../../amplifyconfiguration.json";
import Navbar from "./libs/components/navBar";

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
    <div className="flex flex-col h-screen">
        <Navbar />
      <div className="flex-grow pt-[72px] overflow-y-auto bg-[#F2F7FA] p-6 md:p-12 text-surface-900">
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
