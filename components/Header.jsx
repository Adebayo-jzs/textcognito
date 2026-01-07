export default function Header(){
    return(
        <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm bg-white/10 dark:bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white drop-shadow-md">
                Textcognito
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 font-semibold text-white/90">
              <a className="hover:text-white transition-colors" href="#">About</a>
              <a className="hover:text-white transition-colors" href="#">Safety</a>
              <a className="hover:text-white transition-colors" href="#">Blog</a>
              <a className="bg-white text-primary px-5 py-2 rounded-full font-bold hover:scale-105 transition-transform" href="#">
                Download
              </a>
            </div>
            <button className="md:hidden text-white">
              <span className="material-icons-round text-3xl">menu</span>
            </button>
          </div>
        </nav>
    );
}