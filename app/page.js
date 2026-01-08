import Header from '@/components/Header';
import Games from '@/components/sections/Games';
import Inbox from '@/components/sections/Inbox';
import Hero from '@/components/sections/Hero';
import React from 'react';
import GetToKnow from '@/components/sections/get-to-know';
import Footer from '@/components/Footer';
import { Bolt, ContentCopy, LinkOutlined, Security, ShareSharp, Sms } from '@mui/icons-material';
import { ChartAreaIcon, Filter, Link, LinkIcon, Share, Share2, ShareIcon } from 'lucide-react';
// If using Next.js, use: import Link from 'next/link';
// If using Next.js, you might handle fonts in layout.js, but for now links are included below.

export default function TextcognitoLanding() {
  const features = [
    {id:1,title:"100% Anonymous",text:"Complete privacy guaranteed. We never reveal sender identities or store identifying information.",color: "text-indigo-400",bg:"bg-indigo-500/10",Icon:Security},
    {id:2,title:"Smart Filters",text:"Advanced spam detection and content filters keep your inbox clean and safe.",color: "text-blue-400", bg: "bg-blue-500/10", hover: "group-hover:bg-blue-500/20",Icon:Filter},
    {id:3,title:"Easy Sharing",text:"Share your link on social media with one click. Works everywhere!",color: "text-green-400", bg: "bg-green-500/10", hover: "group-hover:bg-green-500/20",Icon:ShareSharp},
    {id:4,title:"Instant Delivery",text:"Receive messages instantly with real-time notifications. Never miss a message!",color: "text-red-400",bg: "bg-red-500/10", hover: "group-hover:bg-red-500/20",Icon:Bolt},
    {id:5,title:"Analytics",text:"Track views, messages received, and engagement stats in your dashboard.",color: "text-violet-400", bg: "bg-violet-500/10", hover: "group-hover:bg-violet-500/20",Icon:ChartAreaIcon},
    {id:6,title:"Custom Link",text:"Get your personalized link like textcognito.com/yourname. Easy to remember and share!",color: "text-purple-400", bg: "bg-purple-500/10",hover: "group-hover:bg-purple-500/20",Icon:LinkIcon},
  ]
  return (
     
    <div className="transition-colors duration-300 overflow-x-hidden font-display">
      <section className="pt-20 pb-32 relative bg-gradient-to-tr from-[#15121a]  via-[#141118] to-[#1c1425]  ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f48ec]/10 border border-[#8f48ec]/20 text-[#8f48ec] text-xs font-semibold mb-8">
                <span className="text-sm"><Bolt fontSize='15'/></span>
                Anonymous messaging made simple
              </div>
              <h1 className="text-5xl lg:text-6xl text-primary-foreground  font-black tracking-tight leading-[1.1] mb-6 ">
                Receive <br />
                <span className="bg-gradient-to-br from-[#8f48ec] to-[#a855f7] bg-clip-text text-transparent">
                  Anonymous Messages
                </span>{" "}
                From Friends
              </h1>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
                Create your unique link, share it with friends, and receive honest
                anonymous messages. Safe, simple, and fun!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#8f48ec] hover:bg-[#8c4aea] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#8f48ec]/25 hover:shadow-[#8f48ec]/40 flex items-center gap-2">
                  Get Your Link Free
                </button>
                <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all">
                  See How It Works
                </button>
              </div>
              <div className="mt-12 flex gap-12 border-t border-white/5 text-white pt-8">
                <div>
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                    Active Users
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2M+</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                    Messages Sent
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                    User Rating
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Visual/Phone Mockup */}
            <div className="relative">
              <div className="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-6 shadow-2xl relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#8f48ec] flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">link</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Your Unique Link</div>
                    <div className="text-xs text-gray-400">Share with friends</div>
                  </div>
                </div>
                <div className="bg-[#0f0f0f]/50 rounded-xl p-4 mb-6 border border-white/5 flex justify-between items-center">
                  <span className="text-[#8f48ec] text-sm font-medium">
                    textcognito.xyz/u/yourname
                  </span>
                  <span className="material-symbols-outlined text-gray-400 text-sm cursor-pointer hover:text-white">
                    <ContentCopy fontSize='15'/>
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#8f48ec]/5 border border-[#8f48ec]/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1 text-xs text-[#8f48ec] font-bold">
                      <span className="text-sm"><Sms fontSize='15'/></span>
                      New Message
                    </div>
                    <div className="text-gray-300 text-sm">
                      You&apos;re such an amazing friend! Keep being awesome! 🌟
                    </div>
                  </div>
                  <div className="bg-[#8c4aea]/5 border border-[#8c4aea]/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1 text-xs text-[#8c4aea] font-bold">
                      <span className="text-sm"><Sms fontSize='15'/></span>
                      New Message
                    </div>
                    <div className="text-gray-300 text-sm">
                      Your positivity is contagious! Thanks for being you! ✨
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#8f48ec] rounded-full blur-[100px] opacity-20 -z-10"></div>
            </div>
        </div>
      </section>



      <section className="pt-20 pb-32 relative bg-[#121212]  px-6">
        <div className="text-white text-center mt-6 mb-16 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f48ec]/10 border border-[#8f48ec]/20 text-[#8f48ec] text-xs font-semibold">
            FEATURES
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-6 ">Why choose Textcognito?</h2>
          <p className="text-gray-400">Everything you need to receive and manage anonymous messages safely and easily.</p>
        </div>
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-6">
          {features.map(feature => (
            <div key={feature.id} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#8f48ec]/30 transition-colors group">
              <div className={`${feature.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.hover}`}>
                <feature.Icon className={`  ${feature.color} ${feature.hover}}`} />
              </div>
              <h2 className="text-xl   font-bold   mt-6 mb-4 ">{feature.title}</h2>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section> 
      {/* <Header/> */}



      {/* Header Hero */}
      {/* <Hero/>
      <Games/> 
      <Inbox/>
      <GetToKnow/> 
      <Footer/> */}
      

      {/* Footer */}
      
    </div>
    
  );
}
