
export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-b-[4rem] shadow-2xl z-10">
        {/* <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-b-[4rem] shadow-2xl z-10"> */}
          <div className="absolute top-1/4 left-10 w-24 h-24 bg-yellow-300 rounded-full blur-xl opacity-40 animate-float"></div>
          <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-cyan-300 rounded-full blur-xl opacity-40 animate-float-delayed"></div>
          
          <div className="container mx-auto px-4 text-center relative z-20">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none mb-6 drop-shadow-lg">
              real friends<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-100">
                real secrets
              </span>
            </h1>
            <p className="text-xl text-white/90 font-medium mb-10 max-w-xl mx-auto">
              The most fun way to interact anonymously. Ask questions, confess secrets, and get to know your squad.
            </p>
            <button className="bg-white text-primary  text-xl font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 mx-auto">
              Download the app!
              <span className="material-icons-round">download</span>
            </button>

            {/* Hero Images */}
            <div className="relative mt-16 h-80 w-full max-w-4xl mx-auto">
              <div className="absolute left-0 md:left-10 top-0 transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="bg-white p-2 rounded-3xl shadow-lg w-48 h-64 md:w-56 md:h-72">
                  <img 
                    alt="Person laughing" 
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL2zkhViSV-AyTPuxXxsnGQDljka--oGETxUyCGZ6FBIcn0MreFvnNN_NCrPU0ozCwrnBIfAETwbYd3ZU1uiPnfIa-VZxnBOKPEM-CJ6--r69pB8MUgkzCqbLJ7c5chiUrSvB0hoQxd5DjGDmV6YOM6nwSBMtIBmbf51x7Eznm2hLuUWSZM9k3UG_o_KGEsQg9oLJqF5Tx8VKOUvzfSOv6C6rdVyPVuzEzhecAxAIzBvULznhX2exwVOy_rSflA9BBRJfsjnv2UDZ0" 
                  />
                </div>
                <div className="absolute -top-6 -left-6 text-6xl animate-bounce">👋</div>
              </div>
              
              <div className="absolute right-0 md:right-10 top-10 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="bg-white p-2 rounded-3xl shadow-lg w-48 h-64 md:w-56 md:h-72">
                  <img 
                    alt="Friends selfie" 
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdwUrRPgZXHy4owlKDK7WIcw1pfVEtaw_sAuE3JH4otE3IyNK-7q1MEIifKO2X5recK4Ke5VDz8lqcougZG0t-k7jN3mnl7RopNgfqOMh2ETy-MEjRfNDW8nH_dYyvo6a--HPWrEThyJQHF556KAx9n20jKvkl_IsQ2myQXOWCh-MHfTr8XV__vzTlqDoVG7WVVEEMJFgnerS2JJCUJYj1-IRFZY3Bj4IIrrrFt3v0LBBOwEplRQ638OnH0mwN74J2nf68T2gF_fXl" 
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 text-6xl animate-float-delayed">🔥</div>
              </div>
              
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="text-8xl drop-shadow-2xl filter hover:scale-110 transition-transform cursor-pointer">🥤</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 w-full flex justify-center animate-bounce">
            <span className="text-white font-bold flex flex-col items-center text-sm uppercase tracking-widest opacity-80">
              Scroll for more
              <span className="material-icons-round mt-1">arrow_downward</span>
            </span>
          </div>
        </section>
    );

}