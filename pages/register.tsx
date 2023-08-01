import AuthLayout from "@/components/AuthLayout/AuthLayout";
import RegisterForm from "@/components/Register/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
