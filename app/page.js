import Header from '@/components/Header';
import Games from '@/components/sections/Games';
import Inbox from '@/components/sections/Inbox';
import Hero from '@/components/sections/Hero';
import React from 'react';
import GetToKnow from '@/components/sections/get-to-know';
import Footer from '@/components/Footer';
import { Bolt, ContentCopy, LinkOutlined, Security, ShareSharp, Sms ,Download, AppRegistration} from '@mui/icons-material';
import { ChartAreaIcon, Filter} from 'lucide-react';
import Link from 'next/link';
import { Star } from '@mui/icons-material';
import Image from 'next/image';
// If using Next.js, use: import Link from 'next/link';
// If using Next.js, you might handle fonts in layout.js, but for now links are included below.

export const metadata = {
  metadataBase: new URL("https://textcognito.click"),
  title: "Textcognito | Receive Anonymous Messages From Friends",
  description: 'Receive anonymous messages from friends safely. Create your unique link for Instagram, Snapchat, and Twitter.',
  keywords: [
    'anonymous messaging', 
    'secret messages', 
    'instagram anonymous link', 
    'snapchat questions', 
    'anonymous feedback', 
    'textcognito'
  ],
  authors: [{ name: "Adedeji Adebayo" }],
  openGraph: {
    title: "Textcognito - Anonymous Messaging",
    description: "Send and receive anonymous messages safely.",
    type: "website",
    url: "https://textcognito.click",
    siteName: 'Textcognito',
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "Textcognito - Send and receive anonymous messages safely" }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Textcognito - Anonymous Messaging',
    description: 'Get honest feedback and secret messages from your friends.',
    creator: '@theebayo', // Replace if you have a Twitter handle
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function TextcognitoLanding() {
  const features = [
    {id:1,title:"100% Anonymous",text:"Complete privacy guaranteed. We never reveal sender identities or store identifying information.",color: "text-indigo-400",bg:"bg-indigo-500/10",Icon:Security},
    {id:2,title:"Smart Filters",text:"Advanced spam detection and content filters keep your inbox clean and safe.",color: "text-blue-400", bg: "bg-blue-500/10", hover: "group-hover:bg-blue-500/20",Icon:Filter},
    {id:3,title:"Easy Sharing",text:"Share your link on social media with one click. Works everywhere!",color: "text-green-400", bg: "bg-green-500/10", hover: "group-hover:bg-green-500/20",Icon:ShareSharp},
    {id:4,title:"Instant Delivery",text:"Receive messages instantly with real-time notifications. Never miss a message!",color: "text-red-400",bg: "bg-red-500/10", hover: "group-hover:bg-red-500/20",Icon:Bolt},
    {id:5,title:"Analytics",text:"Track views, messages received, and engagement stats in your dashboard.",color: "text-violet-400", bg: "bg-violet-500/10", hover: "group-hover:bg-violet-500/20",Icon:ChartAreaIcon},
    {id:6,title:"Custom Link",text:"Get your personalized link like textcognito.com/yourname. Easy to remember and share!",color: "text-purple-400", bg: "bg-purple-500/10",hover: "group-hover:bg-purple-500/20",Icon:LinkOutlined},
  ]
  const testimonials = [
    {
      id: 1,
      name: "Sarah J.",
      text: "\"This app is amazing! I've received so many sweet messages from my friends. It's really fun and completely safe!\"",
      image: "/sarah.png", // Placeholder for Sarah
      type: "image"
    },
    {
      id: 2,
      name: "Mike T.",
      text: "\"Best anonymous messaging platform! Super easy to use and I love the clean design. Highly recommend!\"",
      image: "/mike.png", // Placeholder for Mike
      type: "image"
    },
    {
      id: 3,
      name: "Bayo A.",
      text: "\"I was skeptical at first, but this is genuinely fun! The privacy features make me feel secure.\"",
      initial: "B",
      type: "initial" // Special handling for the letter avatar
    }
  ]
  const cardSectionClass = "relative ";
  // const cardSectionClass = "relative md:sticky md:top-0 min-h-screen flex flex-col justify-center overflow-hidden";
  const shareLink = `${process.env.NEXT_PUBLIC_SITE_URL}/u/yourusername`
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Textcognito',
          applicationCategory: 'SocialNetworkingApplication',
          operatingSystem: 'Web',
           
          description: 'Receive anonymous messages from friends safely.',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1024',
          },
        }),
      }}
    />
    <div className="transition-colors duration-300 font-display overflow-x-hidden min-h-screen">
      {/* <Header/> */}
      <section className={`${cardSectionClass} pt-20 mt-20 pb-32 bg-gradient-to-tr from-[#15121a]  via-[#141118] to-[#1c1425]  `}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f48ec]/10 border border-[#8f48ec]/20 text-[#8f48ec] text-xs font-semibold mb-8">
                <span className="text-sm"><Bolt fontSize='15'/></span>
                Anonymous messaging made simple
              </div>
              <h1 className="text-5xl lg:text-6xl text-white  font-black tracking-tight leading-[1.1] mb-6 ">
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
                <Link className="bg-[#8f48ec] hover:bg-[#8c4aea] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-[#8f48ec]/25 hover:shadow-[#8f48ec]/40 flex items-center gap-2" href="/auth/sign-up">
                  Get Your Free Link
                </Link>
                <Link href={"/download"} className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all">
                  Download the app!
                  <span><Download/></span>
                </Link>
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
                    {shareLink}
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
                      New essage
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



      <section className={`${cardSectionClass} py-20 relative z-10 bg-[#121212]  px-6`}>
        <div className="text-white text-center  mb-16 max-w-2xl mx-auto">
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

      <section className={`${cardSectionClass} py-20 relative z-10 bg-[#0f0f0f]  px-6`}>
        <div className="text-white text-center  mb-16 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f48ec]/10 border border-[#8f48ec]/20 text-[#8f48ec] text-xs font-semibold">
            HOW IT WORKS
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-6 ">Get Started in 3 simple steps</h2>
          <p className="text-gray-400">Start receiving anonymous messages in under a minute.</p>
        </div>
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-6">
           
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#8f48ec] rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#8f48ec]/30 border-4 border-[#0f0f0f]">
              1
            </div>
            <div className="h-48 bg-[#121212] rounded-xl mb-6 overflow-hidden flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8f48ec]/10 to-transparent"></div>
              <div className="w-3/4 h-3/4 bg-[#1a1a1a] rounded-lg shadow-sm overflow-hidden relative">
            <div className="absolute top-2 left-2 w-full h-4 bg-[#121212] rounded-sm"></div>
            <div className="absolute top-8 left-2 right-2 bottom-2 bg-indigo-100 rounded-sm flex items-center justify-center">
            <span className=" text-4xl text-indigo-300"><AppRegistration/></span>
            </div>
            </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Create Your Account</h3>
            <p className="text-gray-400 text-sm">
              Sign up free and claim your unique username. Takes less than 30 seconds!
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#8f48ec] rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#8f48ec]/30 border-4 border-[#0f0f0f]">
              2
            </div>
            <div className="h-48 bg-[#121212] rounded-xl mb-6 overflow-hidden flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8f48ec]/10 to-transparent"></div>
              <div className="w-3/4 h-3/4 bg-[#1a1a1a] rounded-lg shadow-sm overflow-hidden relative">
            <div className="absolute top-2 left-2 w-full h-4 bg-[#121212] rounded-sm"></div>
            <div className="absolute top-8 left-2 right-2 bottom-2 bg-indigo-100 rounded-sm flex items-center justify-center">
            <span className=" text-4xl text-indigo-300"><ShareSharp/></span>
            </div>
            </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Share your Link</h3>
            <p className="text-gray-400 text-sm">
              Share your personalised link on Instagram,X,Tiktok,or anywhere you like up.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#8f48ec] rounded-full flex items-center justify-center font-bold shadow-lg shadow-[#8f48ec]/30 border-4 border-[#0f0f0f]">
              3
            </div>
            <div className="h-48 bg-[#121212] rounded-xl mb-6 overflow-hidden flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8f48ec]/10 to-transparent"></div>
              <img
                alt="Create account"
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2zkhViSV-AyTPuxXxsnGQDljka--oGETxUyCGZ6FBIcn0MreFvnNN_NCrPU0ozCwrnBIfAETwbYd3ZU1uiPnfIa-VZxnBOKPEM-CJ6--r69pB8MUgkzCqbLJ7c5chiUrSvB0hoQxd5DjGDmV6YOM6nwSBMtIBmbf51x7Eznm2hLuUWSZM9k3UG_o_KGEsQg9oLJqF5Tx8VKOUvzfSOv6C6rdVyPVuzEzhecAxAIzBvULznhX2exwVOy_rSflA9BBRJfsjnv2UDZ0"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Receive Messages</h3>
            <p className="text-gray-400 text-sm">
               Get Instant Notifications when friends send you anonymous messages
            </p>
          </div>
        </div>
      </section> 
      <section className={`${cardSectionClass} py-20 relative z-10 bg-[#121212]  px-6`}>
        <div className="text-white text-center  mb-16 max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f48ec]/10 border border-[#8f48ec]/20 text-[#8f48ec] text-xs font-semibold">
            TESTIMONIALS
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 mt-6 ">Loved by Thousands</h2>
          <p className="text-gray-400">See what our users are saying about Textcognito.</p>
        </div>
        <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-6">
           {testimonials.map((review) => (
            <div key={review.id} className="bg-[#1a1a1a] rounded-2xl p-6 border border-white/5 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className=" text-yellow-400  fill-current"> 
                    <Star style={{fontSize:"16px"}}/>
                  </span>
                ))}
              </div>
              <p className='text-gray-400 text-sm flex-grow mb-4'>{review.text}</p>
              {/* User Profile */}
              <div className="flex items-center gap-3 mt-auto">
                {/* Avatar Logic */}
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  {review.type === 'image' ? (
                    <Image 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover grayscale-[0.2]"
                      width={100}
                      height={100}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#3d2c5e] flex items-center justify-center text-[#a87ffb] font-bold">
                      {review.initial}
                    </div>
                  )}
                </div>
                <span className="text-white font-bold text-sm tracking-wide">
                  {review.name}
                </span>
              </div>
            </div>
           ))}
           
           
        </div>
      </section> 
      
      {/* Call to Action Section (Purple Gradient) */}
      <section className="w-full bg-gradient-to-br from-[#8f48ec] to-[#7b3bd1]  py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Receiving Messages?
        </h2>
        <p className="text-white/90 mb-8 font-medium">
          Join thousands (maybe not thousands) of users who are already connecting with friends anonymously.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-[#8f48ec] font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-50 transition-colors">
            Create Your Free Account
          </button>
          <button className="bg-transparent border border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </section>
      
      <footer className="w-full">
      {/* Main Footer Links */}
      <div className="bg-[#0a080c] pt-16 pb-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#8e46ec] w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg">T</div>
              <span className="text-white font-bold text-xl">Textcognito</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The safest way to receive anonymous messages from friends.
            </p>
            {/* Social Icons (using placeholders) */}
            <div className="flex gap-3">
              {['tw', 'ig', 'fb'].map((social) => (
                <div key={social} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">
                  <span className="text-slate-400 text-xs font-bold uppercase">{social}</span>
                </div>
              ))}
            </div>
          </div>
          {/* <div> 
          <Link href="/" className='text-gray-400 hover:text-white'>About</Link>
          </div>
          <div> 
          <Link href="/" className='text-gray-400 hover:text-white'>Safety</Link>
          </div>
          <div> 
          <Link href="/" className='text-gray-400 hover:text-white'>About</Link>
          </div> */}
 
          {/* Links Columns */}
          <div>
            <h3 className="text-white font-bold mb-6">Product</h3>
            <div className="flex flex-col space-y-3 text-slate-500 text-sm">
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Features</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Pricing</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">FAQ</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Roadmap</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3 text-slate-500 text-sm">
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">About Us</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Contact</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Blog</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Careers</Link>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3 text-slate-500 text-sm">
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Terms of Service</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</Link>
              <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Guidelines</Link>
            </ul>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm">
            © 2026 Textcognito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
      {/* <Header/> */}



      {/* Header Hero */}
      {/* <Hero/>
      <Games/> 
      <Inbox/>
      <GetToKnow/> 
      <Footer/> */}
      

      {/* Footer */}
      
    </div>
    </>
  );
}
