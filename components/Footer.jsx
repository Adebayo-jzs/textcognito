export default function Footer(){
    return(
        <footer className="bg-gradient-to-t from-orange-400 via-pink-500 to-purple-600   rounded-t-[4rem] relative z-10 pt-32 pb-10 -mt-16">
          <div className="absolute top-10 left-10 text-7xl animate-bounce hidden md:block">👑</div>
          <div className="absolute top-20 right-20 text-7xl animate-float hidden md:block">🧸</div>
          
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8">
              join<br />the fun
            </h2>
            
            <div className="relative h-80 max-w-3xl mx-auto flex justify-center items-center mb-12">
              <div className="absolute left-4 md:left-20 top-10 transform -rotate-12 w-40 h-40 md:w-56 md:h-56 bg-white p-2 rounded-2xl shadow-lg z-0">
                <img 
                  alt="Girl selfie" 
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ0XG-clL0INAQ21qH4OHsW86bF9DPohIKwPVqWjW7Zqhk27AvunlGQtQrzZyldXtv9T4st5S3XH5iN64bMXJe1Z_60QKNqQswWgkscI19TL0LcVuV7IeHIvWWgQs4F8P7aw1QjUK-QSNzcTwiJzi1Tf-zO49KkEQuFkPncaUhKsBqB1Akdad78qcr1Mcu-WJMH-A1ReHrqDETTnBZ3bGp4QXX_RCI3nmGit8Dl4piMe_PDn7SkPgEbAZNaz_i6e0OfkjFdcyxaIl4" 
                />
              </div>
              
              <div className="relative z-20 bg-white p-4 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 p-2">
                    <div className="bg-white col-span-2 row-span-2 rounded-sm"></div>
                    <div className="bg-white col-start-5 col-span-2 row-span-2 rounded-sm"></div>
                    <div className="bg-white col-start-1 col-span-2 row-start-5 row-span-2 rounded-sm"></div>
                    <div className="bg-white col-start-3 row-start-1 rounded-sm"></div>
                    <div className="bg-white col-start-4 row-start-2 rounded-sm"></div>
                    <div className="bg-white col-start-3 row-start-4 rounded-sm"></div>
                    <div className="bg-white col-start-5 row-start-5 rounded-sm"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xs shadow-lg">TC</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute right-4 md:right-20 bottom-10 transform rotate-12 w-40 h-40 md:w-56 md:h-56 bg-white p-2 rounded-2xl shadow-lg z-0">
                <img 
                  alt="Guy selfie" 
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_hAwdvoyr6sR7e-CN46ruSx8KWhU2KgVP53B1DDnVtYWeaQbdLLsJBNZzR70bihvI7gNRgk7Nbaz3dxQgZTEC7WCR0ImBVYFRnwPFHe7JK6pQrtfeU8Lzcyl3vSrJuonMRKQXQ9ZOLVA4W2LnzHqPtTIKk-vsU_huz1uTgWy9FGKW3doX0xZdmjWPFmz11IX-c6bVYShPvw84ArCMKwh0i1fBBaP4adxrr8wcnVdsQA7MW9rWqLMFaVCy0tm3-xv4cwhSTqiyItOK" 
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-8 mt-20">
              <div className="text-3xl font-black text-white mb-4 md:mb-0">Textcognito</div>
              <div className="flex gap-6 text-white font-semibold text-sm">
                <a className="hover:underline" href="#">About</a>
                <a className="hover:underline" href="#">Safety</a>
                <a className="hover:underline" href="#">Contact Us</a>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <a className="text-white hover:text-white/80 transition-colors" href="#">Instagram</a>
                <a className="text-white hover:text-white/80 transition-colors" href="#">TikTok</a>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-xs mt-8 font-medium">
              <div>hello@textcognito.app</div>
              <div className="flex gap-4 mt-2 md:mt-0">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className="mt-2 md:mt-0">Made with love in CyberSpace 💜</div>
            </div>
          </div>
        </footer>
    );
}