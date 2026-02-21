import { redirect } from 'next/navigation'
import { LogoutButton } from '@/components/logout-button'
import { createClient } from '@/lib/server'

export default async function ProtectedPage() {
  const supabase = await createClient()

  // 1. Get the authenticated user
  const { data: { user }, error } = await supabase.auth.getUser()

  // 2. Redirect if not logged in
  if (error || !user) {
    redirect('/login')
  }

  // 3. Fetch profile using the user.id we just got
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('username') // Select only what you need
    .eq('id', user.id)  // <--- This was the missing piece
    .single()

  return (
    <div className="flex h-svh w-full flex-col items-center justify-center gap-4">
      <p>
        Email: <span className="font-bold">{user.email}</span>
      </p>
      
      <p>
        Username: <span className="font-bold">
          {/* Handle case where profile might be missing temporarily */}
          {profile?.username ?? 'No username set'} 
        </span>
      </p>

      <LogoutButton />
    </div>
  );
}