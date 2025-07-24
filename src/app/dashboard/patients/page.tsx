"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Amplify } from "aws-amplify";
import { listUsers } from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
import type { ListUsersQuery, ListUsersQueryVariables } from "@/API";
import config from "../../../amplifyconfiguration.json";

Amplify.configure(config);
const client = generateClient();

export default function Page() {
  const router = useRouter();
  const [patients, setPatients] = useState<
    (ListUsersQuery["listUsers"]["items"][number] | null)[]
  >([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const result = await client.graphql<ListUsersQuery>({
          query: listUsers,
          variables: {
            filter: { role: { eq: "patient" } },
          },
        });

        const users =
          (result as { data: ListUsersQuery }).data?.listUsers?.items ?? [];
        setPatients(users.filter(Boolean)); // Filter out nulls if any
      } catch (err) {
        console.error("Error fetching patients:", err);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Patients List
      </h1>

      <div className="space-y-4 md:space-y-0 md:divide-y md:border md:rounded-lg md:bg-white md:shadow-sm overflow-hidden">
        {patients.map((patient) => (
          <div
            key={patient.id}
            onClick={() =>
              router.push(
                `/dashboard/patients/${
                  patient.id
                }/exerciseDetails?name=${encodeURIComponent(patient.name)}`
              )
            }
            className="cursor-pointer bg-white md:bg-transparent rounded-xl md:rounded-none border border-gray-200 md:border-0 shadow-sm hover:shadow-md md:hover:bg-gray-50 transition-all p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center border border-blue-300">
                {patient.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-gray-900 font-medium text-base md:text-lg">
                  {patient.name}
                </p>
                <p className="text-gray-500 text-sm mt-1 md:mt-0">
                  ID:{" "}
                  <span className="font-semibold text-gray-700">
                    {patient.id}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 md:text-right">
              <span className="text-sm text-blue-600 font-medium hover:underline">
                View Exercises →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
