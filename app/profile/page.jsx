import { redirect } from 'next/navigation';
import { createClient } from '@/lib/server';
import DashboardClient from './client'; // We'll create this file next
import { ArrowDownward, Bolt } from '@mui/icons-material';
import { ArrowRight, Mail } from 'lucide-react';

export default async function Dashboard() {
  const supabase = await createClient();

  // 1. Get current user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login');

  // 2. Get profile (for the share link)
  const { data: profile } = await supabase
    .from('profiles')
    .select('username, avatar_url') 
    .eq('id', user.id)
    .single();

  // 3. Get messages for this user
  const { data: messages } = await supabase
    .from('messages')
    .select('*')
    .eq('recipient_id', user.id)
    .order('created_at', { ascending: false });

  const shareLink = `${process.env.NEXT_PUBLIC_SITE_URL}/u/${profile?.username}`;
  const username = profile?.username || 'user';
  const messageCount = messages?.length || 0;
  
  // Use user metadata for avatar if available, or a default placeholder
  const avatarUrl = profile?.avatar_url || user?.user_metadata?.avatar_url || "/defaultavatar.png";

  return (
     
       
 
      <section className="flex-grow flex flex-col bg-[#121212] items-center justify-start relative overflow-hidden pt-20">
        {/* Background Effects */}
    <div className="flex-grow flex flex-col items-center justify-start p-6  ">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-900/40 rounded-full blur-[120px] opacity-50 -z-10"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-900/40 rounded-full blur-[120px] opacity-50 -z-10"></div>

        <div className="w-full max-w-lg bg-[#121212]/90 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative mb-8">
          
          {/* Profile Header */}
          <div className="pt-10 pb-6 px-8 text-center relative z-10 bg-gradient-to-b from-white/5 to-transparent">
            <div className="inline-block relative mb-2">
              {/* <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#8f48ec] to-[#8949c3] shadow-xl shadow-[#8f48ec]/20"> */}
                <div className="w-24 h-24 rounded-full border-4 border-[#121212] overflow-hidden bg-[#121212]">
                  <img alt="User" className="w-full h-full object-cover" src={avatarUrl} />
                </div>
              {/* </div> */}
               
            </div>
            {/* <h1 className="text-2xl font-bold text-white mb-1 capitalize">{username}</h1> */}
            <p className="text-gray-400 text-sm font-medium">@{username}</p>
            {/* <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8f48ec]/10 text-[#8f48ec] text-xs font-bold border border-[#8f48ec]/20 tracking-wide uppercase">
              <span className="material-symbols-outlined text-sm"><Bolt/></span>
              Your link is active
            </div> */}
          </div>

          {/* Interactive Client Component for Copy/Share */}
          <DashboardClient shareLink={shareLink} username={username} messageCount={messageCount} />

          {/* Stats Footer */}
          
        </div>

        {/* Messages List (Server Side Rendered) */}
        {/* <div id="inbox" className="w-full max-w-lg space-y-4">
          <h2 className="text-xl font-bold text-white mb-4 pl-2">Your Inbox</h2>
          
          {messages?.length === 0 ? (
            <div className="text-center py-12 bg-[#121212]/50 rounded-2xl border border-white/5 border-dashed">
              <span className="material-symbols-outlined text-4xl text-gray-600 mb-2">inbox</span>
              <p className="text-gray-500">No messages yet. Share your link to get started!</p>
            </div>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="bg-[#171717] p-6 rounded-xl border border-white/5 hover:border-[#8f48ec]/30 transition-colors shadow-sm relative group">
                <p className="text-lg font-medium text-gray-200 leading-relaxed">{msg.content}</p>
                <div className="flex justify-between items-center mt-4 border-t border-white/5 pt-4">
                   <p className="text-xs text-gray-500 font-medium">
                    {new Date(msg.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} • {new Date(msg.created_at).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <button className="text-gray-500 hover:text-white transition-colors" title="Save">
                        <span className="material-symbols-outlined text-[18px]">bookmark</span>
                     </button>
                     <button className="text-gray-500 hover:text-red-400 transition-colors" title="Delete">
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                     </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div> */}
    </div>
    </section>

    
  );
}