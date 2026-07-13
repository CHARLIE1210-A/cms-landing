import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { OnboardingForm } from "@/components/onboarding-form"

export default async function OnboardingPage() {
  const supabase = await createClient()

  // 1. Check if user is authenticated
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) {
    redirect("/login")
  }

  // 2. Check if they already have an active organization membership
  const { data: membership } = await supabase
    .from("memberships")
    .select("organization_id")
    .eq("profile_id", user.id)
    .is("deleted_at", null)
    .limit(1)
    .single()

  // 3. If they already have an organization, bypass onboarding and send to dashboard
  if (membership) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-md">
        <OnboardingForm />
      </div>
    </div>
  )
}
