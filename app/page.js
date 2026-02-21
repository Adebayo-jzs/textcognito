import Header from '@/components/Header';
import Mockup from "@/components/mockup";
import { Star } from 'lucide-react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Link01Icon,KnightShieldIcon, Chart01Icon, FilterIcon,Bolt, Share08Icon } from '@hugeicons/core-free-icons/index';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedHero, AnimatedMockup, AnimatedSectionHeader, AnimatedFeatureCard, AnimatedStep, AnimatedTestimonial, FadeUp } from '@/components/LandingAnimations';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL("https://textcognito.click"),
  title: "TextCognito | Receive anonymous messages from friends.",
  description: 'Receive anonymous messages from friends. The safe, secure, and world-class(or not) way to connect.',
};

export default function TextcognitoLanding() {
  // const features = [
  //   {id:1, title:"End-to-End Privacy", text:"We never reveal identities. Your secrets are safe with our military-grade encryption.", icon: Shield, color: "text-[#D1C0EC]"},
  //   {id:2, title:"Smart AI Filters", text:"Our advanced AI blocks bullying and spam before it reaches your inbox.", icon: Filter, color: "text-[#C4ADDD]"},
  //   {id:3, title:"Instant Sharing", text:"One-click sharing to Snapchat, Instagram, and TikTok with custom themes.", icon: Share2, color: "text-[#8D77A8]"},
  //   {id:4, title:"Real-time Delivery", text:"Get notified the second a message arrives. Never miss a moment.", icon: Zap, color: "text-[#D1C0EC]"},
  //   {id:5, title:"Deep Analytics", text:"See who's viewing your profile with our advanced (anonymous) insights.", icon: TrendingUp, color: "text-[#C4ADDD]"},
  //   {id:6, title:"Custom Links", text:"Claim your unique username and personalize your profile page.", icon: LinkIcon, color: "text-[#8D77A8]"},
  // ];
    const features = [
    {id:1,title:"100% Anonymous",text:"Complete privacy guaranteed. We never reveal sender identities or store identifying information.",color: "text-indigo-400",bg:"bg-indigo-500/10",card:"hover:border-indigo-400/20",Icon:KnightShieldIcon},
    {id:2,title:"Smart Filters",text:"Advanced spam detection and content filters keep your inbox clean and safe.",color: "text-blue-400", bg: "bg-blue-500/10", hover: "group-hover:bg-blue-500/20",card:"hover:border-blue-400/20",Icon:FilterIcon},
    {id:3,title:"Easy Sharing",text:"Share your link on social media with one click. Works everywhere!",color: "text-green-400", bg: "bg-green-500/10", hover: "group-hover:bg-green-500/20",card:"hover:border-green-400/20",Icon:Share08Icon},
    {id:4,title:"Instant Delivery",text:"Receive messages instantly with real-time notifications. Never miss a message!",color: "text-red-400",bg: "bg-red-500/10", hover: "group-hover:bg-red-500/20",card:"hover:border-red-400/20",Icon:Bolt},
    {id:5,title:"Analytics",text:"Track views, messages received, and engagement stats in your dashboard.",color: "text-violet-400", bg: "bg-violet-500/10", hover: "group-hover:bg-violet-500/20",card:"hover:border-violet-400/20",Icon:Chart01Icon},
    {id:6,title:"Custom Link",text:"Get your personalized link like textcognito.com/yourname. Easy to remember and share!",color: "text-purple-400", bg: "bg-purple-500/10",hover: "group-hover:bg-purple-500/20",card:"hover:border-purple-400/20",Icon:Link01Icon},
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Content Creator",
      text: "TextCognito has completely transformed how I interaction with my followers. It's the gold standard for anonymous apps.",
      initial: "S"
    },
    {
      id: 2,
      name: "Mike T.",
      role: "Student",
      text: "Finally, an app that actually cares about safety. The AI filters are a game changer.",
      initial: "M"
    },
    {
      id: 3,
      name: "Jessica L.",
      role: "Influencer",
      text: "The design is beautiful and it's so easy to share on my stories. Love it!",
      initial: "J"
    }
  ];

  return (
    <div className="w-full min-h-screen font-sans text-white overflow-hidden selection:bg-[#D1C0EC] selection:text-[#1b0e20]">
      {/* <Header /> */}
      
      {/* Hero Section */}
      <section className="bg-[#1a191b] relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Abstract Background Glow */}
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#8D77A8] rounded-full blur-[180px] opacity-20 -z-10 pointer-events-none"></div> */}
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl relative z-10">
            <AnimatedHero>
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#44334A]/30 border border-[#D1C0EC]/20 text-[#D1C0EC] text-sm font-medium mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D1C0EC] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D1C0EC]"></span>
              </span>
              The #1 Anonymous Messaging App
            </div> */}
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Real Friends <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1C0EC] via-[#C4ADDD] to-[#8D77A8]">
                 real secrets.
              </span>
            </h1>
            {/* <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Receive messages <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1C0EC] via-[#C4ADDD] to-[#8D77A8]">
                 with confidence.
              </span>
            </h1> */}
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              Create your unique link, share it on your socials, and let your friends be honest with you. 
              Safe, secure, and beautifully designed.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg">
              Create your unique link, share it with friends, and receive honest
              anonymous messages. Safe, simple, and fun!
            </p>
            </AnimatedHero>
            
            <FadeUp delay={300}>
            <div className="flex flex-wrap gap-4"> 
              <Link href="/register" className="bg-[#D1C0EC] text-[#1b0e20] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform">
                Get Your Link
              </Link>
              {/* <Link href="/about" className="px-8 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-colors">
                Learn More
              </Link> */}
               
            </div>
            </FadeUp>

            <FadeUp delay={500}>
            <div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#1b0e20] bg-[#44334A]"></div>
                  ))}
               </div>
               <div>Joined by 5+ users</div>
            </div>
            </FadeUp>
          </div>
          
          {/* Floating Mockup */}
          <AnimatedMockup>
          <div className="relative perspective-1000">
             <div className="relative z-10 transform md:rotate-y-[-12deg] md:rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
                <div className="relative rounded-[2.5rem]  ">
                    <Mockup />
                </div>
             </div> 
             {/* <div className="absolute top-10 right-10 w-64 h-64 bg-[#C4ADDD] rounded-full blur-[100px] opacity-10 -z-10 animate-pulse"></div> */}
          </div>
          </AnimatedMockup>
        </div>
      </section>

      {/* Social Proof Logostrip (Placeholder) */}
      {/* <section className="py-10 border-y border-white/5 bg-[#1b0e20]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest font-semibold">Trusted by influencers on</p>
            <div className="flex justify-center gap-12 opacity-40 grayscale"> 
                <div className="text-2xl font-bold">Instagram</div>
                <div className="text-2xl font-bold">TikTok</div>
                <div className="text-2xl font-bold">Snapchat</div>
                <div className="text-2xl font-bold">Twitter</div>
            </div>
        </div>
      </section> */}

      {/* Features Section - Bento Grid */}
      <section className="py-32 px-6 relative bg-[#121212]">
         <div className="max-w-7xl mx-auto">
            <AnimatedSectionHeader>
            <div className="text-center mb-20">
                <span className="text-[#D1C0EC] font-bold text-sm tracking-widest uppercase">Features</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Everything you need. <br/><span className="text-gray-500">Nothing you don't.</span></h2>
            </div>
            </AnimatedSectionHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <AnimatedFeatureCard key={feature.id} index={i}>
                    <div className={`p-8 rounded-3xl bg-[#44334A]/20 border border-white/5 transition-all hover:-translate-y-1 group ${feature.card}  ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}>
                        <div className={`${feature.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${feature.hover}`}>
                          <HugeiconsIcon icon={feature.Icon} className={`  ${feature.color} ${feature.hover}}`} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{feature.text}</p>
                    </div>
                    </AnimatedFeatureCard>
                ))}
            </div>
         </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-6  bg-[#1a191b]">
      {/* <section className="py-32 px-6  bg-[#1a191b] bg-[#160b1a]"> */}
         <div className="max-w-7xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                     <AnimatedSectionHeader>
                     <span className="text-[#D1C0EC] font-bold text-sm tracking-widest uppercase">How It Works</span>
                     <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Start receiving messages in <span className="text-[#D1C0EC]">30 seconds.</span></h2>
                     <p className="text-gray-400 text-lg mb-12">No complex setup. Just create your link and share it.</p>
                     </AnimatedSectionHeader>
                     
                     <div className="space-y-12">
                         <AnimatedStep index={0}>
                         <div className="flex gap-6">
                             <div className="w-12 h-12 rounded-full border border-[#D1C0EC]/30 flex items-center justify-center text-[#D1C0EC] font-bold text-xl shrink-0">1</div>
                             <div>
                                 <h3 className="text-xl font-bold mb-2">Create your account</h3>
                                 <p className="text-gray-500">Sign up securely and claim your unique username.</p>
                             </div>
                         </div>
                         </AnimatedStep>
                         <AnimatedStep index={1}>
                         <div className="flex gap-6">
                             <div className="w-12 h-12 rounded-full border border-[#D1C0EC]/30 flex items-center justify-center text-[#D1C0EC] font-bold text-xl shrink-0">2</div>
                             <div>
                                 <h3 className="text-xl font-bold mb-2">Share your link</h3>
                                 <p className="text-gray-500">Post it on your Instagram Story, TikTok bio, or Snapchat.</p>
                             </div>
                         </div>
                         </AnimatedStep>
                         <AnimatedStep index={2}>
                         <div className="flex gap-6">
                             <div className="w-12 h-12 rounded-full border border-[#D1C0EC]/30 flex items-center justify-center text-[#D1C0EC] font-bold text-xl shrink-0">3</div>
                             <div>
                                 <h3 className="text-xl font-bold mb-2">Receive messages</h3>
                                 <p className="text-gray-500">Get instant notifications when friends send you anonymous notes.</p>
                             </div>
                         </div>
                         </AnimatedStep>
                     </div>
                 </div>
                 <div className="relative">
                     {/* Abstract Phone Representation */}
                     <div className="aspect-[4/5] bg-[#121212] border border-[#44334A] grid items-center rounded-3xl p-8 relative overflow-hidden">
                     {/* <div className="aspect-[4/5] bg-[#1b0e20] border border-[#44334A] grid items-center rounded-3xl p-8 relative overflow-hidden"> */}
                         <div className="absolute inset-0 bg-gradient-to-br from-[#8D77A8]/20 to-transparent"></div>
                         {/* Animated Elements */}
                         <div className="absoute top-1/4 left-10 right-10 p-4 bg-[#44334A]/40 backdrop-blur-md rounded-xl border border-white/5 animate-pulse">
                            <div className="h-2 w-1/3 bg-[#D1C0EC]/50 rounded mb-2"></div>
                            <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                         </div>
                         <div className="abolute top-1/2 left-10 right-10 p-4 bg-[#44334A]/40 backdrop-blur-md rounded-xl border border-white/5 delay-700 animate-pulse">
                            <div className="h-2 w-1/3 bg-[#8D77A8]/50 rounded mb-2"></div>
                            <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                         </div>
                         <div className="abslute top-1/4 left-10 right-10 p-4 bg-[#44334A]/40 backdrop-blur-md rounded-xl border border-white/5 animate-pulse">
                            <div className="h-2 w-1/3 bg-[#D1C0EC]/50 rounded mb-2"></div>
                            <div className="h-2 w-2/3 bg-white/10 rounded"></div>
                         </div>
                         <div className="abolute top-1/2 left-10 right-10 p-4 bg-[#44334A]/40 backdrop-blur-md rounded-xl border border-white/5 delay-700 animate-pulse">
                            <div className="h-2 w-1/3 bg-[#8D77A8]/50 rounded mb-2"></div>
                            <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-[#121212]">
          <div className="max-w-7xl mx-auto">
             <AnimatedSectionHeader><h2 className="text-4xl font-bold text-center mb-16">Loved by a few.</h2></AnimatedSectionHeader>
             <div className="grid md:grid-cols-3 gap-8">
                 {testimonials.map((t, i) => (
                     <AnimatedTestimonial key={t.id} index={i}>
                     <div className="bg-[#44334A]/10 border border-white/5 p-8 rounded-3xl hover:bg-[#44334A]/20 transition-colors">
                         <div className="flex gap-1 mb-6 text-[#D1C0EC]">
                             {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                         </div>
                         <p className="text-gray-300 mb-8 italic">"{t.text}"</p>
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D1C0EC] to-[#8D77A8] flex items-center justify-center font-bold text-[#1b0e20]">
                                 {t.initial}
                             </div>
                             <div>
                                 <div className="font-bold">{t.name}</div>
                                 <div className="text-xs text-gray-500">{t.role}</div>
                             </div>
                         </div>
                     </div>
                     </AnimatedTestimonial>
                 ))}
             </div>
          </div>
      </section>

      {/* CTA */}
      {/* <section className="py-32 px-6 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#44334A] to-[#1b0e20] border border-white/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
               <div className="relative z-10">
                   <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to go incognito?</h2>
                   <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join the fastest growing anonymous messaging community today.</p>
                   <Link href="/auth/sign-up" className="inline-block bg-[#D1C0EC] text-[#1b0e20] px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-[#D1C0EC]/20">
                     Create Free Account
                   </Link>
               </div>
          </div>
      </section> */}

      {/* Footer */}
      
      <Footer/>

      {/* Accept cookies */}
      {/* <div className='fixed z-99  right-3 bottom-3 rounded-xl bg-[#d1c0ec] max-w-[300px] sm:max-w-md p-3'>
        <h1 className='text-black font-semibold text-xl'>Accept Cookies?</h1>
        <p className='text-black'>We use cookies on our site to make your experience better. Please agree to our cookie policy by clicking accept.</p>
        <div className='flex gap-3 mt-2'>

        <Button className="bg-white hover:bg-black hover:text-black transition">Accept All</Button>
        <Button className="bg-red-500 hover:bg-red-600">Reject All</Button>
        </div>
      </div> */}
    </div>
  );
}
