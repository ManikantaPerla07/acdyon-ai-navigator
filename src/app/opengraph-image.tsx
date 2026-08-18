import { ImageResponse } from "next/og";

export const alt = "AcdyOn AI Navigator";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f5f2",
          padding: "72px",
          color: "#111111",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 16,
              background: "#111111",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            A
          </div>

          <span>AcdyOn AI Navigator</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#5b5cf0",
              fontWeight: 600,
            }}
          >
            AC DYON AI LAB
          </div>

          <div
            style={{
              fontSize: 72,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              maxWidth: 900,
            }}
          >
            Your next career move,
            <br />
            <span style={{ color: "#888888" }}>mapped by AI.</span>
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.4,
              color: "#666666",
              maxWidth: 780,
            }}
          >
            Turn your career goal into a focused learning path with clear next
            steps.
          </div>
        </div>

        <div
          style={{
            fontSize: 20,
            color: "#999999",
          }}
        >
          Concept product experience · AcdyOn Technologies frontend challenge
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}