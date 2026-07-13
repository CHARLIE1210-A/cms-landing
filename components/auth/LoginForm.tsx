"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { supabase } from "@/lib/supabaseClient";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormInput) => {
    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (error) {
        throw new Error(error.message);
      }

      setSuccessMsg("Logged in successfully! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to initialize Google login.");
      setGoogleLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-edge-default shadow-card-xl bg-surface-raised rounded-2xl">
      <CardHeader className="space-y-2 text-center pt-8 px-8">
        <CardTitle className="font-heading font-extrabold text-2xl text-ink-primary">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-ink-secondary text-xs sm:text-sm">
          Enter your email and password to access your PaintCMS dashboard.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-8 pb-6 text-left">
        {/* Status Messages */}
        {errorMsg && (
          <div className="mb-4 flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs sm:text-sm">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="mb-4 flex items-start gap-2.5 bg-emerald-50 border border-emerald-250 text-emerald-700 p-3 rounded-xl text-xs sm:text-sm">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{successMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-ink-secondary uppercase tracking-wider block" htmlFor="email">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="e.g. contractor@gmail.com"
              disabled={loading || googleLoading}
              {...register("email")}
              className={`bg-white border ${
                errors.email ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
              } h-11 rounded-xl text-sm`}
            />
            {errors.email && (
              <span className="text-[11px] font-semibold text-red-500 block pt-0.5">{errors.email.message}</span>
            )}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-ink-secondary uppercase tracking-wider block" htmlFor="password">
                Password
              </label>
              <Link href="#" className="text-xs font-semibold text-brand-600 hover:text-brand-700">
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              disabled={loading || googleLoading}
              {...register("password")}
              className={`bg-white border ${
                errors.password ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
              } h-11 rounded-xl text-sm`}
            />
            {errors.password && (
              <span className="text-[11px] font-semibold text-red-500 block pt-0.5">{errors.password.message}</span>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full btn btn-primary btn-md rounded-xl mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Logging in...
              </>
            ) : (
              "Login to Dashboard"
            )}
          </Button>
        </form>

        <div className="relative my-6 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-edge-default" />
          </div>
          <span className="relative bg-surface-raised px-3.5 text-xs text-ink-tertiary font-semibold uppercase tracking-wider">
            Or continue with
          </span>
        </div>

        {/* Google OAuth Button */}
        <Button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading || googleLoading}
          variant="outline"
          className="w-full btn btn-secondary btn-md rounded-xl text-ink-secondary hover:bg-neutral-50 gap-2.5"
        >
          {googleLoading ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
            </svg>
          )}
          Continue with Google
        </Button>
      </CardContent>

      <CardFooter className="px-8 pb-8 pt-0 flex justify-center text-xs sm:text-sm text-ink-secondary">
        New to PaintCMS?{" "}
        <Link href="/signup" className="text-brand-600 font-bold hover:text-brand-700 ml-1">
          Create a free account
        </Link>
      </CardFooter>
    </Card>
  );
}
