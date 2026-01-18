"use server"
import { GoogleGenAI } from "@google/genai";

export async function GenerateMessage(){
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    try{
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: "Generate a short, funny, and friendly anonymous message (under 15 words) that I can send to a friend. Return ONLY the text.",
        });
        return response.text;
        console.log(response.text);
    } catch(error) {
        console.error("Gemini erroe:", error)
        return "You're awesome!";
    }
  
}