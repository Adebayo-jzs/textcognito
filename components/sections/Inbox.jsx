export default function Inbox(){
    return(
        <section className="bg-gradient-to-r from-pink-500 to-purple-600   rounded-t-[4rem] rounded-b-[4rem] relative z-10 py-32 -mt-16">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.9]">
                flood your<br />
                inbox
            </h2>
            <div className="mt-12 flex gap-4">
                <span className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-inner">📩</span>
                <span className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-inner transform -translate-y-4">❤️</span>
                <span className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-inner">🔥</span>
            </div>
            </div>
        </section>
    );

}