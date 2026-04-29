import { ImageResponse } from "next/og";

const siteName = "Har Har Mahadev Tours & Travels";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B1F3A 0%, #17385f 58%, #FF6B2B 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, color: "#FFD4C1" }}>
          Nashik Tempo Traveller, Bus & Cab Booking
        </div>
        <div style={{ marginTop: 28, maxWidth: 920, fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
          {siteName}
        </div>
        <div style={{ marginTop: 28, maxWidth: 820, fontSize: 34, lineHeight: 1.35, color: "#E5E7EB" }}>
          Local and outstation travel from Nashik for families, pilgrims, weddings, and corporate groups.
        </div>
      </div>
    ),
    size
  );
}
