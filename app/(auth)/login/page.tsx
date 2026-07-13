import LoginForm from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | PaintCMS",
  description: "Sign in to your PaintCMS account to manage your sites, workers, and profitability.",
};

export default function LoginPage() {
  return (
    <>
      <LoginForm />
    </>
  );
}
