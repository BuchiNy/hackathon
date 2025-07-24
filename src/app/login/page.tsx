"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import config from "../../amplifyconfiguration.json";
Amplify.configure(config);

function Login({ signOut, user }: WithAuthenticatorProps) {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/dashboard");
    }
  }, [user, router]);

  return (
    <main className="p-6">
      <h1>Redirecting to dashboard...</h1>
    </main>
  );
}

export default withAuthenticator(Login, {
  signUpAttributes: ["email"],
});
