import AuthLayout from "@/components/AuthLayout/AuthLayout";
import LoginForm from "@/components/Login/LoginForm";
import React from "react";

export default function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
