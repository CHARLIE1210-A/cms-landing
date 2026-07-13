'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function createOrganization(formData: { name: string; slug: string }) {
  const supabase = await createClient()

  // 1. Get authenticated user
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) {
    return { error: 'Unauthorized' }
  }

  // 2. Insert the new organization
  const { data: org, error: orgError } = await supabase
    .from('organizations')
    .insert({
      name: formData.name,
      slug: formData.slug.toLowerCase().trim(),
      created_by: user.id,
    })
    .select()
    .single()

  if (orgError) {
    return { error: orgError.message }
  }

  // 3. Create the Owner membership for this user
  const { error: memberError } = await supabase
    .from('memberships')
    .insert({
      organization_id: org.id,
      profile_id: user.id,
      role: 'owner',
    })

  if (memberError) {
    // Rollback organization creation on failure
    await supabase.from('organizations').delete().eq('id', org.id)
    return { error: memberError.message }
  }

  revalidatePath('/dashboard', 'layout')
  return { success: true, organizationId: org.id }
}
