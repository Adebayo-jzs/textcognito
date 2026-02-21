import React from 'react';
import Link from 'next/link'; 
import { HugeiconsIcon } from '@hugeicons/react';
import { KnightShieldIcon, FilterIcon, UserIcon, Rocket01Icon, Lightbulb, Target01Icon } from '@hugeicons/core-free-icons/index';
import { AnimatedSectionHeader, AnimatedFeatureCard, AnimatedStep, FadeUp } from '@/components/LandingAnimations';
import Footer from '@/components/Footer';

export const metadata = {
    title: "About TextCognito | Safe Anonymous Messaging",
    description: "Learn about TextCognito — a one-person, AI-powered mission to create the safest anonymous messaging platform.",
};

export default function About() {
    const values = [
        {
            id: 1,
            title: "Privacy First",
            text: "Privacy is a right, not a feature. Your identity is protected with end-to-end design, and we never sell your data.",
            color: "text-indigo-400",
            bg: "bg-indigo-500/10",
            hover: "group-hover:bg-indigo-500/20",
            card: "hover:border-indigo-400/20",
            Icon: KnightShieldIcon,
        },
        {
            id: 2,
            title: "Safe Expression",
            text: "AI-powered moderation catches bullying and harmful content before it reaches you. Safety is non-negotiable.",
            color: "text-[#D1C0EC]",
            bg: "bg-[#D1C0EC]/10",
            hover: "group-hover:bg-[#D1C0EC]/20",
            card: "hover:border-[#D1C0EC]/20",
            Icon: FilterIcon,
        },
        {
            id: 3,
            title: "Built for People",
            text: "Designed for real friends to share honest thoughts. Every feature is shaped by user feedback and genuine care.",
            color: "text-pink-400",
            bg: "bg-pink-500/10",
            hover: "group-hover:bg-pink-500/20",
            card: "hover:border-pink-400/20",
            Icon: UserIcon,
        },
    ];

    const stats = [
        { label: "Users", value: "5+", note: "and growing" },
        { label: "Messages Sent", value: "100+", note: "safely delivered" },
        { label: "Uptime", value: "99.9%", note: "reliable, always" },
        { label: "Team Size", value: "1", note: "powered by AI" },
    ];

    return (
        <div className="min-h-screen font-sans text-white overflow-hidden selection:bg-[#D1C0EC] selection:text-[#1b0e20]">

            {/* Hero */}
            <section className="bg-[#1a191b] relative pt-32 pb-20 md:pt-44 md:pb-28 px-6">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8D77A8] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <FadeUp>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#44334A]/30 border border-[#D1C0EC]/20 text-[#D1C0EC] text-sm font-medium mb-8">
                            <HugeiconsIcon icon={Rocket01Icon} className="w-4 h-4" />
                            About TextCognito
                        </span>
                    </FadeUp>
                    <FadeUp delay={100}>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                            One person. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1C0EC] via-[#C4ADDD] to-[#8D77A8]">
                                One mission.
                            </span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={200}>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
                            TextCognito is built by a solo developer leveraging AI to create meaningful, safe, and beautifully designed products. 
                            No massive team — just a deep passion for building things that matter.
                        </p>
                    </FadeUp>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-[#121212] border-y border-white/5 py-12 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, i) => (
                        <FadeUp key={stat.label} delay={i * 100}>
                            <div>
                                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D1C0EC] to-[#8D77A8]">{stat.value}</div>
                                <div className="text-white font-semibold mt-1">{stat.label}</div>
                                <div className="text-gray-500 text-sm">{stat.note}</div>
                            </div>
                        </FadeUp>
                    ))}
                </div>
            </section>

            {/* Mission */}
            <section className="py-28 px-6 bg-[#121212]">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSectionHeader>
                        <div className="text-center mb-16">
                            <span className="text-[#D1C0EC] font-bold text-sm tracking-widest uppercase">Our Values</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">What we believe in. <br/><span className="text-gray-500">What we build for.</span></h2>
                        </div>
                    </AnimatedSectionHeader>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((item, i) => (
                            <AnimatedFeatureCard key={item.id} index={i}>
                                <div className={`p-8 rounded-3xl bg-[#44334A]/20 border border-white/5 transition-all hover:-translate-y-1 group ${item.card}`}>
                                    <div className={`${item.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.hover}`}>
                                        <HugeiconsIcon icon={item.Icon} className={`${item.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                                </div>
                            </AnimatedFeatureCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Story */}
            <section className="py-28 px-6 bg-[#1a191b]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <AnimatedSectionHeader>
                            <span className="text-[#D1C0EC] font-bold text-sm tracking-widest uppercase">The Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                                Why I built <span className="text-[#D1C0EC]">TextCognito.</span>
                            </h2>
                        </AnimatedSectionHeader>
                        <div className="space-y-10">
                            <AnimatedStep index={0}>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-[#D1C0EC]/30 flex items-center justify-center shrink-0">
                                        <HugeiconsIcon icon={Lightbulb} className="text-[#D1C0EC] w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">The Problem</h3>
                                        <p className="text-gray-500">Anonymous messaging apps became synonymous with toxicity. I saw friends get hurt by platforms that didn't care about safety. That needed to change.</p>
                                    </div>
                                </div>
                            </AnimatedStep>
                            <AnimatedStep index={1}>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-[#D1C0EC]/30 flex items-center justify-center shrink-0">
                                        <HugeiconsIcon icon={Target01Icon} className="text-[#D1C0EC] w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">The Solution</h3>
                                        <p className="text-gray-500">By combining AI moderation with thoughtful design, TextCognito proves that anonymous messaging can be safe, fun, and beautiful — without compromising on privacy.</p>
                                    </div>
                                </div>
                            </AnimatedStep>
                            <AnimatedStep index={2}>
                                <div className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border border-[#D1C0EC]/30 flex items-center justify-center shrink-0">
                                        <HugeiconsIcon icon={Rocket01Icon} className="text-[#D1C0EC] w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">The Future</h3>
                                        <p className="text-gray-500">What started as a solo project is growing into something bigger. With AI as my co-pilot, I'm building features faster than teams ten times my size.</p>
                                    </div>
                                </div>
                            </AnimatedStep>
                        </div>
                    </div>

                    {/* Visual Card */}
                    <FadeUp delay={200}>
                        <div className="bg-[#121212] border border-[#44334A] rounded-3xl p-10 md:p-14 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#8D77A8]/15 to-transparent"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#D1C0EC] to-[#8D77A8] flex items-center justify-center text-[#1b0e20] font-bold text-3xl mb-8">
                                    A
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Hi, I'm the developer behind TextCognito.</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">
                                    I'm a one-person team who believes that one passionate developer with the right tools can build products that rival anything out there. 
                                    AI helps me write better code, catch more bugs, and ship faster — but the vision, the care, and the design are all human.
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    Every line of code in TextCognito exists because I genuinely care about making anonymous messaging safe for everyone. 
                                    This isn't just a project — it's a mission.
                                </p>
                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-gray-500 text-sm font-medium">
                                    Made with ❤️ by a human, powered by AI
                                </div>
                                <Link href="https://theebayo.name.ng"><h3 className="text-xl font-bold tracking-widest underline">Adebayo  ADEDEJI</h3></Link>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 px-6 text-center bg-[#121212]">
                <FadeUp>
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to try it?</h2>
                        <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
                            Join TextCognito and start receiving honest, anonymous messages from your friends today.
                        </p>
                        <Link href="/register" className="inline-block bg-[#D1C0EC] text-[#1b0e20] px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform  ">
                            Get Your Free Link
                        </Link>
                    </div>
                </FadeUp>
            </section>

            {/* Footer */}
             <Footer/>
        </div>
    );
}