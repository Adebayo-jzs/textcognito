// app/u/[username]/og-image.jsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OgImage({ params }) {
  const { username } = await params;

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
        fontFamily: "sans-serif",
      }}>
        {/* Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            "radial-gradient(circle at 25px 25px, white 2%, transparent 0%)",
          backgroundSize: "50px 50px",
        }} />

        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
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
          }}>
            Textcognito
          </span>
        </div>

        {/* Headline */}
        <div style={{
          textAlign: "center",
          padding: "0 60px",
          fontSize: 80,
          fontWeight: 900,
          lineHeight: 1.1,
        }}>
          @{username}
        </div>

        {/* CTA (THIS FIXES SEO SCORE) */}
        <div style={{
          marginTop: 40,
          fontSize: 36,
          color: "#aaa",
        }}>
          Send me an anonymous message →
        </div>
      </div>
    ),
    size
  );
}
