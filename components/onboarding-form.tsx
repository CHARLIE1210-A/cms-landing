"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, AlertCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { createOrganization } from "@/app/actions/organization"

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
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-edge-default shadow-card-xl bg-surface-raised rounded-3xl">
        <CardContent className="p-6 md:p-8 text-left">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FieldGroup className="space-y-4">
              
              {/* Header */}
              <div className="flex flex-col items-center gap-2 text-center pb-2">
                <div className="relative w-10 h-10 shadow-card mb-2">
                  <Image
                    src="/logo/product-logo.svg"
                    alt="PaintCMS Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h1 className="font-heading font-extrabold text-2xl text-ink-primary">
                  Setup Your Workspace
                </h1>
                <p className="text-xs text-ink-secondary max-w-sm">
                  Create a new organization to manage your painting job sites, supervisors, and painters.
                </p>
              </div>

              {/* Status Messages */}
              {errorMsg && (
                <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 p-3 rounded-xl text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

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
                  className={`bg-white border ${
                    errors.name ? "border-red-500 focus:ring-red-500/30" : "border-edge-default focus:border-brand-600"
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
                      "pl-[96px] bg-white border h-10 rounded-xl text-xs font-mono w-full",
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
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium h-10 rounded-xl text-xs flex items-center justify-center gap-2 transition-all mt-4 cursor-pointer"
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
        </CardContent>
      </Card>
    </div>
  )
}
