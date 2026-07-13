"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, AlertCircle, CheckCircle2, Paintbrush } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabaseClient";

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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-edge-default shadow-card-xl bg-surface-raised rounded-3xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          
          {/* Left Column: Form Content */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 text-left space-y-6">
            <FieldGroup className="space-y-5">
              
              {/* Header */}
              <div className="flex flex-col items-center gap-2 text-center pb-2">
                <Link href="/" className="flex items-center gap-2 group mb-2">
                  <div className="bg-brand-600 p-2 rounded-xl text-white shadow-card">
                    <Paintbrush className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-lg tracking-tight text-ink-primary">
                    Paint<span className="text-brand-600">CMS</span>
                  </span>
                </Link>
                <h1 className="font-heading font-extrabold text-2xl text-ink-primary">
                  Welcome back
                </h1>
                <p className="text-xs text-ink-secondary">
                  Login to manage worker attendance & sites
                </p>
              </div>

              {/* Status Messages */}
              {errorMsg && (
                <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {successMsg && (
                <div className="flex items-start gap-2.5 bg-emerald-50 border border-emerald-250 text-emerald-700 p-3 rounded-xl text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{successMsg}</span>
                </div>
              )}

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
                  className={`bg-white border ${
                    errors.email ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
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
                  className={`bg-white border ${
                    errors.password ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
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
              <FieldSeparator className="text-ink-tertiary text-xs uppercase font-semibold py-1">
                Or continue with
              </FieldSeparator>

              {/* Google Button */}
              <Field>
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
              </Field>

              {/* Redirect Footer */}
              <FieldDescription className="text-center text-xs text-ink-secondary">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="text-brand-600 font-bold hover:text-brand-700">
                  Sign up
                </Link>
              </FieldDescription>

            </FieldGroup>
          </form>

          {/* Right Column: Premium Branded Cover Block */}
          <div className="relative hidden md:flex flex-col justify-between bg-brand-950 p-10 text-white overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
            {/* Glowing background highlights */}
            <div className="absolute -top-1/4 -right-1/4 w-80 h-80 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />
            
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] font-extrabold text-brand-300 uppercase tracking-widest block">
                PaintCMS for Contractors
              </span>
              <h2 className="font-heading font-extrabold text-3xl leading-tight">
                Run every site. <br />
                Pay every worker. <br />
                Know every rupee.
              </h2>
            </div>

            <div className="relative z-10 space-y-4">
              <blockquote className="text-xs text-brand-200 leading-relaxed font-medium italic">
                "No more jugaad — just results. We help you digitize daily attendance and wages without paper leaks."
              </blockquote>
              <div className="text-[10px] text-brand-300 font-bold uppercase tracking-wider">
                PaintCMS Suite
              </div>
            </div>
          </div>

        </CardContent>
      </Card>
      
      <FieldDescription className="px-6 text-center text-xs text-ink-tertiary">
        By clicking continue, you agree to our{" "}
        <Link href="#" className="hover:text-ink-secondary underline">Terms of Service</Link>{" "}
        and{" "}
        <Link href="#" className="hover:text-ink-secondary underline">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
