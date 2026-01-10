import { redirect } from 'next/navigation';
import { createClient } from '@/lib/server';
import Link from 'next/link';
import CopyLink from './copylink';

// --- Utility: Relative Time Formatter ---
// function getRelativeTime(dateString) {
//   const date = new Date(dateString);
//   const now = new Date();
//   const seconds = Math.floor((now - date) / 1000);
  
//   let interval = seconds / 31536000;
//   if (interval > 1) return Math.floor(interval) + " years ago";
//   interval = seconds / 2592000;
//   if (interval > 1) return Math.floor(interval) + " months ago";
//   interval = seconds / 86400;
//   if (interval > 1) return Math.floor(interval) + " days ago";
//   interval = seconds / 3600;
//   if (interval > 1) return Math.floor(interval) + " hours ago";
//   interval = seconds / 60;
//   if (interval > 1) return Math.floor(interval) + " mins ago";
//   return "Just now";
// }

export default async function Dashboard() {
  const supabase = await createClient();

  // 1. Get current user
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/auth/login');

  // 2. Get profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('username')
    .eq('id', user.id)
    .single();

  // 3. Get messages
  const { data: messages } = await supabase
    .from('messages')
    .select('*')
    .eq('recipient_id', user.id)
    .order('created_at', { ascending: false });

  const shareLink = `${process.env.NEXT_PUBLIC_SITE_URL}/u/${profile?.username}`;
  
  // Calculate new message count (e.g. messages less than 24h old or via a 'read' flag if you have one)
  const newMessagesCount = messages?.filter(m => {
    const isRecent = (new Date() - new Date(m.created_at)) < 86400000000000; // 24 hours
    return isRecent; // OR check !m.read_at if you have that column
  }).length || 0;
   

  return (
    <div className="bg-[#0f0f0f] text-white antialiased min-h-screen flex flex-col selection:bg-[#8f48ec] selection:text-white font-['Outfit',sans-serif] pt-20">
      {/* Fonts & Icons */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
      `}</style>

      {/* Navbar */}
      {/* <nav className="sticky top-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8f48ec] to-[#8949c3] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-[#8f48ec]/20">
              T
            </div>
            <span className="text-xl font-bold tracking-tight">Textcognito</span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-[#1a1a1a]/50 p-1 rounded-full border border-white/5">
            <Link href="/profile" className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all border border-transparent hover:bg-white/5">
              Share Link
            </Link>
            <div className="px-4 py-2 rounded-full text-sm font-medium text-white bg-[#8f48ec]/10 border-[#8f48ec]/20 border transition-all">
              Messages
            </div>
            <Link href="/settings" className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-all border border-transparent hover:bg-white/5">
              Settings
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 pr-2 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5 hover:border-[#8f48ec]/30 transition-colors cursor-pointer group">
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {profile?.username || user.email?.split('@')[0]}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-[#8f48ec] group-hover:text-white transition-colors">
                {profile?.username?.[0].toUpperCase() || 'U'}
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="flex-grow relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#8f48ec]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8c4aea]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
          
          {/* Header & Copy Link */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Inbox</h1>
              <p className="text-gray-400 flex items-center gap-2">
                You have 
                <span className="bg-[#8f48ec]/20 text-[#8f48ec] px-2 py-0.5 rounded text-sm font-bold border border-[#8f48ec]/20">
                  {newMessagesCount}
                </span> 
                new anonymous messages
              </p>
            </div>
            
            {/* Display Link & Copy Action */}
             <CopyLink shareLink={shareLink}/>
          </div>

          {/* Messages Grid */}
          <div className="columns-1   gap-6 space-y-6 pb-12 ">
            {(!messages || messages.length === 0) ? (
               <div className="break-inside-avoid rounded-2xl p-8 border border-dashed border-white/10 text-center text-gray-500 bg-[#1a1a1a]/30">
                  <span className="material-symbols-outlined text-4xl mb-2 opacity-50">inbox</span>
                  <p>No messages yet.</p>
                  <p className="text-sm mt-2">Share your link to get started!</p>
               </div>
            ) : (
              messages.map((msg) => {
                // Dynamic Logic for Styling
                const isShort = msg.content && msg.content.length < 50;
                // Assume 'new' if created in last 1 hour
                const isNew = (new Date() - new Date(msg.created_at)) < 3600000; 

                return (
                  <MessageCard 
                    key={msg.id} 
                    content={msg.content} 
                    createdAt={msg.created_at} 
                    isNew={isNew} 
                    variant={isShort ? 'large' : 'default'}
                  />
                );
              })
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-[#0f0f0f] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left text-sm text-gray-500">
          © 2024 Textcognito. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// --- Server Component for Message Card ---
function MessageCard({ content, createdAt, isNew, variant }) {
  const isLarge = variant === 'large';
  // const timeAgo = getRelativeTime(createdAt);

  return (
    <div className={`
      break-inside-avoid rounded-2xl p-6 relative group overflow-hidden transition-all duration-300
      backdrop-blur-md border border-white/5 bg-[#1a1a1a]/60 hover:bg-[#242424]/80
      hover:border-[#8f48ec]/30 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] max-w-lg mx-auto
    `}>
      
      {/* Top Gradient Line (Visible on hover or if New) */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8f48ec] to-[#8c4aea] transition-opacity ${isNew ? 'opacity-80' : 'opacity-0 group-hover:opacity-80'}`}></div>

      {/* Header */}
      <div className={`flex ${isNew ? 'justify-between' : 'justify-end'} items-start mb-4`}>
        {isNew && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> 
            New
          </span>
        )}
        <button className="text-gray-500 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[20px]">more_horiz</span>
        </button>
      </div>

      {/* Content */}
      <p className={`
        ${isLarge ? 'text-2xl text-white font-bold leading-tight' : 'text-lg text-gray-100 font-medium leading-relaxed'}
        mb-6 break-words
      `}>
        {content}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center pt-5 border-t border-white/5">
        {/* <span className="text-xs text-gray-500 font-medium">{timeAgo}</span> */}
        <span className="text-xs text-gray-500 font-medium">{new Date(createdAt).toLocaleDateString()} at {new Date(createdAt).toLocaleTimeString()}</span>
        
        
        <div className="flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
          {/* <button className="w-8 h-8 rounded-full bg-white/5 text-gray-400 hover:bg-[#8f48ec] hover:text-white flex items-center justify-center transition-all">
            <span className="material-symbols-outlined text-[16px]">ios_share</span>
          </button> */}
          {/* <form action={async () => {
             'use server'
             // Add delete logic here later
          }}>
            <button type="submit" className="w-8 h-8 rounded-full bg-white/5 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center text-gray-400 transition-all">
              <span className="material-symbols-outlined text-[16px]">delete</span>
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
