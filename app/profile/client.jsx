'use client';

import { AutoAwesome, ChatBubble, Check, ContentCopy, PhotoCamera, Public,IosShare, X } from '@mui/icons-material';
import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function DashboardClient({ shareLink, username,messageCount }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  const handleShare = async () => {
    const validShareLink = shareLink.startsWith("http") 
      ? shareLink 
      : `https://${shareLink}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Textcognito - Send Anonymous Messages',
          text: `Send ${username} an anonymous message!`,
          url: validShareLink,
        });
      } catch (err) {
        console.log('Share canceled:', err);
      }
    } else {
      // Fallback: Copy link if browser doesn't support native share (e.g. desktop)
      navigator.clipboard.writeText(shareLink);
      alert("Link copied to clipboard!");
    }
  };
  return (
    <div className=" pb-8">
      {/* Link Copy Section */}
      <div className="bg-white/5 rounded-2xl py-5 mx-4 md:mx-9 px-3 border border-white/5 mb-8 shadow-inner">
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 text-center">
          Your Unique Link
        </label>
        {/* <div className="flex items-stretch shadow-lg shadow-black/20 rounded-xl overflow-hidden border border-white/10 bg-black/20 group focus-within:border-[#8f48ec] focus-within:ring-4 ring-[#8f48ec]/10 transition-all mb-4"> */}
           <div className="bg-[#0f0f0f]/50 rounded-xl p-4 mb-6 border border-white/5 flex justify-between items-center">
                <span className="text-[#8f48ec] text-sm font-medium">
                {shareLink}
                </span>
                              
                <button
                    onClick={handleCopy}
                    className="font-bold text-sm transition-all flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-white text-[18px]">
                    {copied ? <Check/> : <ContentCopy/>}
                    </span>
             
                </button>
            </div>
           
        <p className="text-center text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
          Share this link in your Instagram bio or Twitter profile to start receiving anonymous messages!
        </p>
      </div>
        <div className="bg-white/5 p-5 border-t border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 border border-white/5 rounded-lg p-1.5 shadow-sm">
                <span className="material-symbols-outlined text-[#8f48ec] text-sm block"><Mail/></span>
              </div>
              <div className="text-xs text-gray-400 font-medium leading-tight">
                <span className="block text-white font-bold text-sm">{messageCount}</span>
                Messages
              </div>
            </div>
            <Link className="inline-flex items-center gap-1.5 text-[#8f48ec] hover:text-[#8c4aea] font-bold text-sm transition-colors group px-4 py-2 rounded-lg hover:bg-[#8f48ec]/10" href="/messages">
              View Inbox
              <span className="material-symbols-outlined text-lg group-hover:translate-x-0.5 transition-transform"><ArrowRight/></span>
            </Link>
        </div>
      {/* Social Share Buttons */}
      <div className="space-y-3 p-4">
        <h3 className="text-center font-bold text-white mb-4">Share Directly</h3>
        {/* <button className="w-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white p-3.5 rounded-xl font-bold shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group">
          <span className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <span className="text-white text-sm"><PhotoCamera/></span>
          </span>
          Share on Instagram Story
        </button> */}
        <div className="grid grid-cols-2 gap-3">
          {/* <button className="bg-[#FFFC00] text-black border border-yellow-300/50 hover:bg-[#F2F000] p-3.5 rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5">
            <span className="text-black text-xl"><AutoAwesome/></span>
            Snapchat
          </button> */}
          <button 
            onClick={handleShare}
            className="bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 p-3.5 rounded-xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 col-span-2" 
          >
              <span className="text-xl mb-1"><IosShare /></span>
              Share Link
          </button>
          <a 
            href={`https://twitter.com/intent/tweet?text=Send me an anonymous message!&url=${encodeURIComponent(shareLink)}`}
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white border border-gray-800 hover:bg-gray-900 p-3.5 rounded-xl font-bold shadow-lg shadow-black/40 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <span className="text-xl "><X/></span>
            Share as X post
          </a>
          {/* <a 
             href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`}
             target="_blank"
             rel="noreferrer"
             className="bg-[#1877F2] text-white hover:bg-[#166fe5] p-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <span className="text-xl"><Public/></span>
            Facebook
          </a> */}
          <a
            href={`https://wa.me/?text=Send me an anonymous message! ${encodeURIComponent(shareLink)}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-white hover:bg-[#22bf5b] p-3.5 rounded-xl font-bold shadow-lg shadow-green-500/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <span className="  text-xl"><ChatBubble/></span>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}