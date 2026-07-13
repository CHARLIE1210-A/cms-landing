import { redirect } from "next/navigation"
import Link from "next/link"
import { Shield, Settings, Users, Building } from "lucide-react"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const supabase = await createClient()

  // 1. Fetch current authenticated user
  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) {
    redirect("/login")
  }

  // 2. Fetch user's membership and organization details
  const { data: membership, error: memberError } = await supabase
    .from("memberships")
    .select(`
      role,
      organizations (
        id,
        name,
        slug
      )
    `)
    .eq("profile_id", user.id)
    .is("deleted_at", null)
    .limit(1)
    .single()

  // 3. Redirect to onboarding if they are not part of an organization (PGRST116 = row not found)
  if (memberError || !membership) {
    if (memberError && (memberError as any).code === 'PGRST116') {
      redirect("/onboarding")
    }

    // Render diagnostic output for any other errors (such as RLS policy blocks)
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-mono flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full border border-red-500/30 rounded-2xl bg-slate-900/50 p-6 space-y-4">
          <h1 className="text-xl font-bold text-red-500 border-b border-red-500/20 pb-2">
            Dashboard Auth Diagnostics
          </h1>
          <p><strong>User ID:</strong> {user.id}</p>
          <p><strong>User Email:</strong> {user.email}</p>
          <p><strong>Membership Data:</strong> {JSON.stringify(membership)}</p>
          <p><strong>Membership Query Error:</strong> {JSON.stringify(memberError)}</p>
          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
            Note: If the query failed due to RLS, the error code or null data will be printed above.
          </div>
        </div>
      </div>
    )
  }

  const organization = (membership as any).organizations
  const userRole = membership.role

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-edge-default bg-surface/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 shadow-card">
              <Image
                src="/logo/product-logo.svg"
                alt="PaintCMS Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-base tracking-tight text-ink-primary">
              Paint<span className="text-brand-600">CMS</span>
            </span>
          </Link>
          <span className="text-xs text-ink-tertiary">/</span>
          <div className="flex items-center gap-1.5 bg-surface-raised px-2.5 py-1 rounded-md border border-edge-default">
            <Building className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-xs font-semibold text-ink-secondary">{organization.name}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-ink-secondary hidden sm:inline-block font-medium">
            {user.email}
          </span>
          <div className="bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider border border-brand-200">
            {userRole}
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-10 space-y-6">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-edge-default">
          <div>
            <h1 className="font-heading font-extrabold text-3xl text-ink-primary tracking-tight">
              Dashboard
            </h1>
            <p className="text-sm text-ink-secondary">
              Manage your workspace operations, team roles, and painting projects.
            </p>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Organization Details */}
          <Card className="border-edge-default shadow-card bg-surface-raised rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-bold text-ink-secondary uppercase tracking-wider">
                Organization Info
              </CardTitle>
              <Building className="w-4 h-4 text-ink-tertiary" />
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <div className="text-xl font-extrabold text-ink-primary">
                {organization.name}
              </div>
              <p className="text-xs font-mono text-ink-tertiary">
                Slug: {organization.slug}
              </p>
            </CardContent>
          </Card>

          {/* User Role */}
          <Card className="border-edge-default shadow-card bg-surface-raised rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-bold text-ink-secondary uppercase tracking-wider">
                Your Access Level
              </CardTitle>
              <Shield className="w-4 h-4 text-ink-tertiary" />
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <div className="text-xl font-extrabold text-brand-600 capitalize">
                {userRole}
              </div>
              <p className="text-xs text-ink-secondary">
                You have full access to modify and supervise settings.
              </p>
            </CardContent>
          </Card>

          {/* Team Members */}
          <Card className="border-edge-default shadow-card bg-surface-raised rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-bold text-ink-secondary uppercase tracking-wider">
                Workspace Team
              </CardTitle>
              <Users className="w-4 h-4 text-ink-tertiary" />
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <div className="text-xl font-extrabold text-ink-primary">
                1 Member
              </div>
              <p className="text-xs text-ink-secondary">
                Invite painters, helpers, and supervisors.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Panel Placeholder */}
        <div className="border-2 border-dashed border-edge-default rounded-3xl p-12 text-center flex flex-col items-center justify-center space-y-3 bg-surface-raised/50">
          <div className="bg-brand-50 p-4 rounded-full text-brand-600">
            <Settings className="w-8 h-8" />
          </div>
          <h3 className="font-heading font-bold text-lg text-ink-primary">
            Workspace Configuration Complete
          </h3>
          <p className="text-xs text-ink-secondary max-w-sm">
            Your SaaS database architecture is fully integrated. You can now build project sites and contractor assignment forms.
          </p>
        </div>
      </main>
    </div>
  )
}
