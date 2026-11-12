import { ImageResponse } from "next/og";
import { business } from "@/content/site";

export const alt = `${business.name}: professional Christmas light installation in South Florida`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const bulbs = Array.from({ length: 30 }, (_, i) => i);
  const colors = ["#f6c453", "#e4572e", "#2fa36b", "#ffe39a", "#6fb7ff"];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(180deg, #0b1222 0%, #070b16 100%)",
          color: "#e8ecf5",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", gap: 24 }}>
          {bulbs.map((i) => (
            <div
              key={i}
              style={{
                width: 14,
                height: 22,
                borderRadius: 999,
                background: colors[i % colors.length],
                boxShadow: `0 0 18px ${colors[i % colors.length]}`,
                marginTop: i % 2 ? 10 : 0,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 6, color: "#f6c453", textTransform: "uppercase", fontFamily: "sans-serif" }}>
            Miami-Dade · Broward · Palm Beach
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 700, lineHeight: 1.05, marginTop: 18 }}>
            <div>Christmas lights,</div>
            <div style={{ color: "#f6c453" }}>installed like art.</div>
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a9b4cc", marginTop: 28, fontFamily: "sans-serif" }}>
            {`${business.name} · Design, install, maintain, take down.`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
