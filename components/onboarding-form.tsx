"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { createOrganization } from "@/app/actions/organization"
import { AuthLayout } from "@/app/(auth)/_components/auth-layout"
import { AuthAlert } from "@/app/(auth)/_components/auth-alert"

const onboardingSchema = z.object({
  name: z.string().min(2, "Workspace name must be at least 2 characters"),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9-]+$/, "Slug must only contain lowercase letters, numbers, and hyphens"),
})

type OnboardingFormInput = z.infer<typeof onboardingSchema>

export function OnboardingForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<OnboardingFormInput>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "",
      slug: "",
    },
  })

  const workspaceName = watch("name")

  // Auto-generate slug from workspace name
  useEffect(() => {
    if (workspaceName) {
      const generatedSlug = workspaceName
        .toLowerCase()
        .replace(/[^a-z0-9-\s]/g, "") // Remove non-alphanumeric/spaces except hyphens
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-") // Collapse consecutive hyphens
        .substring(0, 30) // Cap at 30 chars
      setValue("slug", generatedSlug, { shouldValidate: true })
    }
  }, [workspaceName, setValue])

  const onSubmit = async (data: OnboardingFormInput) => {
    setLoading(true)
    setErrorMsg(null)

    try {
      const result = await createOrganization(data)

      if (result.error) {
        throw new Error(result.error)
      }

      router.push("/dashboard")
      router.refresh()
    } catch (err: any) {
      setErrorMsg(err.message || "Failed to set up workspace. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout
      title="Setup Your Workspace"
      description="Create a new organization to manage your painting job sites, supervisors, and painters."
      hideCover={true}
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

        <FieldGroup className="space-y-4">
          {/* Workspace Name */}
          <Field className="space-y-1">
            <FieldLabel htmlFor="name" className="text-xs font-bold text-ink-secondary uppercase tracking-wider block">
              Workspace Name
            </FieldLabel>
            <Input
              id="name"
              type="text"
              placeholder="e.g. Apex Painting Ltd"
              disabled={loading}
              {...register("name")}
              className={`bg-white border ${errors.name ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
                } h-10 rounded-xl text-xs`}
            />
            {errors.name && (
              <span className="text-[10px] font-semibold text-red-500 block pt-0.5">
                {errors.name.message}
              </span>
            )}
          </Field>

          {/* Workspace Slug */}
          <Field className="space-y-1">
            <FieldLabel htmlFor="slug" className="text-xs font-bold text-ink-secondary uppercase tracking-wider block">
              Workspace URL Slug
            </FieldLabel>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-ink-tertiary text-xs select-none pointer-events-none font-mono">
                paintcms.com/
              </span>
              <Input
                id="slug"
                type="text"
                placeholder="apex-painting"
                disabled={loading}
                {...register("slug")}
                className={cn(
                  "pl-[108px] bg-white border h-10 rounded-xl text-xs font-mono w-full",
                  errors.slug ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
                )}
              />
            </div>
            <span className="text-[10px] text-ink-tertiary block pt-0.5">
              This slug is your organization's unique URL identifier.
            </span>
            {errors.slug && (
              <span className="text-[10px] font-semibold text-red-500 block pt-0.5">
                {errors.slug.message}
              </span>
            )}
          </Field>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full btn btn-primary btn-md rounded-xl flex items-center justify-center gap-2 mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating Workspace...
              </>
            ) : (
              <>
                Get Started
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </FieldGroup>
      </form>
    </AuthLayout>
  )
}
