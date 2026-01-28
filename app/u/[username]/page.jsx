import { notFound } from 'next/navigation'
import { createClient } from '@/lib/server' // Your server client
import MessageForm from './message-form'
import OgImage from './opengraph-image';   // We'll create this next

// export async function generateMetadata({ params }) {
//   const supabase = await createClient()
//   const { username } = await params;

//   const { data: profile } = await supabase
//     .from("profiles")
//     .select("id,username")
//     .eq("username", username)
//     .single();

//   if (!profile) {
//     return {
//       title: "User Not Found | Textcognito",
//       description: "The user you are looking for does not exist.",
//     };
//   }

//   const displayName = profile.username.charAt(0).toUpperCase() + profile.username.slice(1);
//   const title = `Send ${displayName} a message`;
//   const description = `Send a completely anonymous message to ${profile.username}`;
//   const ogUrl = `https://textcognito.click/u/${profile.username}/opengraph-image`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url: `https://textcognito.click/u/${profile.username}`,
//       images: [
//         {
//           url: ogUrl,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogUrl],
//     },
//   };
// }
export async function generateMetadata({ params }) {
  const supabase = await createClient();
  const { username } =await params;

  const { data: profile } = await supabase
    .from("profiles")
    .select("username")
    .eq("username", username)
    .single();

  if (!profile) {
    return {
      title: "User Not Found | Textcognito",
      description: "The user you are looking for does not exist.",
    };
  }

  const displayName =
    profile.username.charAt(0).toUpperCase() + profile.username.slice(1);

  const title = `Send ${displayName} an anonymous message on Textcognito`;
  const description =
    `Send ${displayName} a completely anonymous message on Textcognito. No login required. 100% private and secure.`;

  const ogUrl = `https://textcognito.click/u/${profile.username}/opengraph-image`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://textcognito.click/u/${profile.username}`,
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}



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

  // return (
  //   <section className="flex-grow flex flex-col bg-[#121212] items-center justify-start relative overflow-hidden pt-20">

  //   <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-[#1a1322]">
  //     {/* <div className="w-full max-w-lg bg-[#121212]/90 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative mb-8"> */}
  //     <div className="w-full max-w-md space-y-6 text-center">
  //       <h1 className="text-3xl font-bold text-white">Send me an anonymous message!</h1>
  //       <p className="text-gray-500">
  //         Sending to <span className="font-bold text-[#9d50f3]">@{profile.username}</span>
  //       </p>

  //       {/* Pass the recipient's ID to the form component */}
  //       <MessageForm recipientId={profile.id} />
  //     </div>
  //     {/* </div> */}
  //   </div>
  //   </section>
  // )

  return (
    <>
      {/* NOTE: In a production Next.js app, these link tags 
        should ideally go in your app/layout.js or Next/Head.
        Included here for a true "one-file" drop-in experience.
      */}


      <div className=" xbg-[#181121]   text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden selection:bg-[#8e46ec] selection:text-white">

        {/* Background Glow Effect */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8e46ec]/10 rounded-full blur-[120px] pointer-events-none z-0" />



        {/* Main Content Area */}
        <main className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <div className="w-full max-w-lg">

            {/* Glassmorphism Card */}
            <div className="relative bg-[#201c26]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8">

              {/* Avatar Section */}
              <div className="flex flex-col items-center mb-6">
                {/* <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 rounded-full p-1 bg-gradient-to-br from-[#8e46ec]/50 to-transparent">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#201c26]">
                    <img 
                      alt="Recipient Avatar" 
                      className="w-full h-full object-cover" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEmRRQjhMlmlCsGoTCVZ-hrnhRatUTvt2DZSUCMyGbfAP6VAYknkrpUcF16I1fEleECVtTfVBx5d9racOgIZVwYeQN36RPn_pBgmXlRuNZqGwIpGWmY5yxcfU6aEtluJ_8P2IK7MUMpd3UqBCZWMJPZjxlwX40nBAG7X3X2d8TINKw-oK6-e4ZTjPrj-1840P2SZniGwZubT99GLrS6Gx6WgqhZE8cElxm3BLQf_73XAIHbaqboTtvmjQd2vaHaBRhqMVC5kEUdSuq" 
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-green-500 w-5 h-5 rounded-full border-4 border-[#201c26]" title="Online" />
                </div> */}
                <h1 className="text-3xl font-bold text-center text-white">Send me an anonymous message!</h1>
                <p className="text-gray-500">
                  Sending to <span className="font-bold text-[#9d50f3]">@{profile.username}</span>
                </p>
              </div>

              {/* Input Section */}
              {/* <form className="flex flex-col gap-4">
                <div className="group relative">
                  <textarea 
                    aria-label="Your anonymous message" 
                    className="w-full bg-[#141118]/80 hover:bg-[#141118] transition-colors border-2 border-transparent focus:border-[#8e46ec]/50 rounded-xl p-4 text-base text-white placeholder:text-slate-500 resize-none outline-none ring-0 min-h-[160px] leading-relaxed" 
                    placeholder="Say something nice..."
                  ></textarea>
                  <div className="absolute bottom-3 right-3 pointer-events-none">
                    <span className="material-symbols-outlined text-slate-600">edit_note</span>
                  </div>
                </div>

                 
                <button 
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-[#8f48ec] to-[#8c4aea] hover:shadow-[0_0_20px_-5px_#8e46ec] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 text-white font-bold text-lg flex items-center justify-center gap-2 group/btn" 
                  type="button"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">send</span>
                </button>
              </form> */}
              <MessageForm recipientId={profile.id} />

              {/* Disclaimer */}
              <div className="mt-6 pt-4 border-t border-white/5 text-center">
                <p className="text-slate-500 text-xs font-medium flex items-center justify-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  100% Anonymous. Please be kind.
                </p>
              </div>
            </div>

            {/* Additional Help Links */}
            <div className="mt-8 flex justify-center gap-6">
              <a className="text-slate-500 hover:text-[#8e46ec] text-sm transition-colors" href="#">How it works</a>
              <a className="text-slate-500 hover:text-[#8e46ec] text-sm transition-colors" href="#">Privacy Policy</a>
              <a className="text-slate-500 hover:text-[#8e46ec] text-sm transition-colors" href="#">Report User</a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}