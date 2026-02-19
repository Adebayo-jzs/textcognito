import { Bolt, ContentCopy, LinkOutlined, Security, ShareSharp, Sms ,Download, AppRegistration} from '@mui/icons-material';
export default function Mockup(){
    const shareLink = `${process.env.NEXT_PUBLIC_SITE_URL}/u/yourusername`;
    return(
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
    );
}