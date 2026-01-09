import { createClient } from '@/lib/client'

export async function POST(req) {
  const { email } = await req.json()

  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
    })
  }

  // Use Supabase Admin client (service role key)
  const supabaseAdmin = createClient(true) // true = service role

  try {
    const { data, error } = await supabaseAdmin.auth.admin.listUsers({
      email,
    })

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      })
    }

    const exists = data.users.length > 0

    return new Response(JSON.stringify({ exists }), { status: 200 })
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
    })
  }
}
