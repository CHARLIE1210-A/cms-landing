import SignupForm from "@/components/auth/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Free Trial | PaintCMS",
  description: "Create your PaintCMS account and start tracking your painting sites in 30 seconds.",
};

export default function SignupPage() {
  return (
    <>
      <SignupForm />
    </>
  );
}
