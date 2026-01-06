import { notFound } from 'next/navigation'
import { createClient } from '@/lib/server' // Your server client
import MessageForm from './message-form'     // We'll create this next

export default async function PublicProfilePage({ params }) {
  const supabase = await createClient();
  const { username } = await params;

  // 1. Find the user ID based on the username in the URL
  const { data: profile } = await supabase
    .from('profiles')
    .select('id, username')
    .eq('username', username)
    .single()

  // If user doesn't exist, show 404
  if (!profile) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold">Send me an anonymous message!</h1>
        <p className="text-gray-500">
          Sending to <span className="font-bold text-black">@{profile.username}</span>
        </p>
        
        {/* Pass the recipient's ID to the form component */}
        <MessageForm recipientId={profile.id} />
      </div>
    </div>
  )
}