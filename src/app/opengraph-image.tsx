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
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: "#111111",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 700,
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
              display: "flex",
              fontSize: "22px",
              color: "#5b5cf0",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            ACDYON AI LAB
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "72px",
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              maxWidth: "900px",
            }}
          >
            <span>Your next career move,</span>

            <span style={{ color: "#888888" }}>
              mapped by AI.
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "28px",
              lineHeight: 1.4,
              color: "#666666",
              maxWidth: "780px",
            }}
          >
            Turn your career goal into a focused learning path with clear next
            steps.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "20px",
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