// app/u/[username]/og-image.jsx
import { ImageResponse } from "next/og";
import { createClient } from "@supabase/supabase-js"; // Use the core library directly

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OgImage({ params }) {
  // 1. Initialize Supabase directly for Edge environment
  // OG images are public, so usually the ANON key is sufficient/correct.
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY // Check your variable name in .env
  );

  const { username } = await params;

  // 2. Fetch from the correct table (assuming 'profiles' exists).
  // If you really meant to fetch a user from 'posts', remove .single() and take the first one,
  // but 'profiles' is usually the correct table for user data.
  const { data: profile } = await supabase
    .from("profiles") // CHANGED: 'posts' -> 'profiles' (Verify your table name)
    .select("username, full_name") // Select fields you actually need
    .eq("username", username)
    .single();

  // 3. Handle missing data (User not found)
  if (!profile) {
    return new ImageResponse(
      (
        <div style={{
            width: "100%", height: "100%", background: "#0e1216", color: "white",
            display: "flex", justifyContent: "center", alignItems: "center", fontSize: 60
        }}>
          User not found
        </div>
      ),
      { ...size }
    );
  }

  // 4. Dynamic Alt Text (Optional but good for SEO/Accessibility)
  // You can't export a dynamic variable, but the ImageResponse is the visual representation.
  
  return new ImageResponse(
    (
      <div style={{
        width: "100%",
        height: "100%",
        background: "#0e1216",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "relative",
        // Note: For consistent fonts in Edge, consider loading a font file using `fonts: []` option
        fontFamily: "sans-serif", 
      }}>
        {/* ... (Background patterns keep as is) ... */}
        
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
          backgroundSize: "50px 50px",
        }} />

        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
           {/* ... (Logo parts keep as is) ... */}
           <div style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(to bottom right, #00C6FF, #00E5FF)",
            marginRight: 20,
          }} />
          <span style={{
            fontSize: 40,
            fontWeight: 700,
            background: "linear-gradient(to right, #fff, #bbb)",
            backgroundClip: "text",
            color: "transparent",
          }}>
            Textcognito
          </span>
        </div>

        <div style={{
          textAlign: "center",
          padding: "0 60px",
          fontSize: 80,
          fontWeight: 900,
          lineHeight: 1.1,
          background: "linear-gradient(to bottom, #fff, #888)",
          backgroundClip: "text",
          color: "transparent",
        }}>
          {profile.username}
        </div>

        <div style={{
          marginTop: 40,
          fontSize: 32,
          color: "#888",
          display: "flex",
          gap: 20,
        }}>
           
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}