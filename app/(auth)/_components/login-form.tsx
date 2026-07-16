"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { AuthAlert } from "./auth-alert";
import { Separator } from "@/components/ui/separator";
import { AuthLayout } from "./auth-layout";

const supabase = createClient();

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInput = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const defaultDashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || "http://localhost:3001/";
  const redirectTo = searchParams.get("redirect_to") || defaultDashboardUrl;

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

      const { data: { session } } = await supabase.auth.getSession();

      setSuccessMsg("Logged in successfully! Redirecting...");
      setTimeout(() => {
        if (session && (redirectTo.startsWith("http://") || redirectTo.startsWith("https://"))) {
          const redirectUrl = new URL(redirectTo);
          const currentUrl = new URL(window.location.href);
          
          if (redirectUrl.origin !== currentUrl.origin) {
            const transferUrl = new URL(`${redirectUrl.origin}/auth/session-transfer`);
            transferUrl.searchParams.set("access_token", session.access_token);
            transferUrl.searchParams.set("refresh_token", session.refresh_token);
            transferUrl.searchParams.set("redirect_to", redirectTo);
            window.location.replace(transferUrl.toString());
            return;
          }
        }

        if (redirectTo.startsWith("http://") || redirectTo.startsWith("https://")) {
          window.location.replace(redirectTo);
        } else {
          router.push(redirectTo);
        }
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
      const callbackUrl = new URL(`${window.location.origin}/auth/callback`);
      if (redirectTo) {
        callbackUrl.searchParams.set("next", redirectTo);
      }
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: callbackUrl.toString(),
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
    <AuthLayout
      title="Welcome back"
      description="Login to manage worker attendance & sites"
      coverImage="/images/undraw_login_weas.svg"
      className={className}
      {...props}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Status Messages */}
        {errorMsg && (
          <AuthAlert
            type="error"
            message={errorMsg}
          />
        )}

        {successMsg && (
          <AuthAlert
            type="success"
            message={successMsg}
          />
        )}

        <FieldGroup className="space-y-4">
          {/* Email Input */}
          <Field className="space-y-1">
            <FieldLabel htmlFor="email" className="text-xs font-bold text-ink-secondary uppercase tracking-wider block">
              Email Address
            </FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="contractor@gmail.com"
              disabled={loading || googleLoading}
              {...register("email")}
              className={`bg-white border ${errors.email ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
                } h-11 rounded-xl text-sm`}
            />
            {errors.email && (
              <span className="text-[11px] font-semibold text-red-500 block pt-0.5">{errors.email.message}</span>
            )}
          </Field>

          {/* Password Input */}
          <Field className="space-y-1">
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="password" className="text-xs font-bold text-ink-secondary uppercase tracking-wider block">
                Password
              </FieldLabel>
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
              className={`bg-white border ${errors.password ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
                } h-11 rounded-xl text-sm`}
            />
            {errors.password && (
              <span className="text-[11px] font-semibold text-red-500 block pt-0.5">{errors.password.message}</span>
            )}
          </Field>

          {/* Submit Button */}
          <Field className="pt-2">
            <Button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full btn btn-primary btn-md rounded-xl py-6"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Logging in...
                </>
              ) : (
                "Login to Dashboard"
              )}
            </Button>
          </Field>

          {/* Separator */}
          <div className="relative my-4">
            <Separator className="bg-edge-default" />
            <span className="bg-surface-raised absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 text-xs text-muted-foreground uppercase font-bold tracking-wider">
              Or
            </span>
          </div>

          {/* Google Button */}
          <Field>
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading || googleLoading}
              variant="outline"
              className="w-full btn btn-secondary btn-md rounded-xl text-ink-secondary hover:bg-neutral-50 gap-2.5 h-10"
            >
              {googleLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                  </svg>
                  Continue with Google
                </>
              )}
            </Button>
          </Field>

          {/* Redirect Footer */}
          <div className="text-center text-xs text-ink-secondary">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-brand-600 font-bold hover:text-brand-700">
              Sign up
            </Link>
          </div>
        </FieldGroup>
      </form>
    </AuthLayout>
  );
}

