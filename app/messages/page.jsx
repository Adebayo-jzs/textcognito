import { redirect } from 'next/navigation'
import { createClient } from '@/lib/server'

export default async function Dashboard() {
  const supabase = await createClient()

  // 1. Get current user
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/auth/login')

  // 2. Get profile (for the share link)
  const { data: profile } = await supabase
    .from('profiles')
    .select('username')
    .eq('id', user.id)
    .single()

  // 3. Get messages for this user
  const { data: messages } = await supabase
    .from('messages')
    .select('*')
    .eq('recipient_id', user.id)
    .order('created_at', { ascending: false })

  const shareLink = `${process.env.NEXT_PUBLIC_SITE_URL}/u/${profile?.username}`

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="bg-gray-100 p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-2">Your Link 🔗</h2>
        <div className="flex gap-2 items-center bg-white p-3 rounded border">
          <code className="flex-1 overflow-hidden text-ellipsis">
            {shareLink}
          </code>
        </div>
      </div>

      {/* Messages Grid */}
      <h2 className="text-2xl font-bold">Inbox ({messages?.length || 0})</h2>
      
      <div className="grid gap-4">
        {messages?.length === 0 ? (
          <p className="text-gray-500">No messages yet. Share your link!</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="border p-6 rounded-xl shadow-sm bg-gradient-to-br from-white to-gray-50">
              <p className="text-lg font-medium text-gray-800">{msg.content}</p>
              <p className="text-xs text-gray-400 mt-4">
                {new Date(msg.created_at).toLocaleDateString()} at {new Date(msg.created_at).toLocaleTimeString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}