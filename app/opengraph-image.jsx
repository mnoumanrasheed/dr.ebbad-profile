import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dr. Ebbad Nazir | Medical Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const logoBuffer = await readFile(join(process.cwd(), "public", "brand", "ebbad-nazir-mark-transparent.png"));
  const logo = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(120deg, #080A0F 0%, #111720 56%, #1B1710 100%)",
          color: "#F8F4EA",
          padding: "66px 76px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-190px",
            right: "-130px",
            height: "580px",
            width: "580px",
            borderRadius: "999px",
            background: "radial-gradient(circle, rgba(213,168,76,.28), transparent 68%)",
          }}
        />
        <img
          src={logo}
          width="430"
          height="304"
          style={{
            position: "absolute",
            top: "112px",
            right: "30px",
            objectFit: "contain",
            opacity: 0.28,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "76px",
            width: "1px",
            background: "rgba(226,201,142,.22)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "#E2C98E", fontSize: "18px", fontWeight: 700, letterSpacing: "3px" }}>
            <img src={logo} width="58" height="42" style={{ objectFit: "contain" }} />
            DR. EBBAD NAZIR / MEDICAL PORTFOLIO
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: "860px" }}>
            <div style={{ color: "#E2C98E", fontSize: "17px", fontWeight: 700, letterSpacing: "3px" }}>LEARNING MEDICINE WITH PURPOSE</div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "18px", fontFamily: "Georgia, serif", fontSize: "75px", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-3px" }}>
              <span>Learning medicine.</span>
              <span>With purpose.</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "24px", color: "rgba(248,244,234,.72)", fontSize: "25px", lineHeight: 1.45 }}>
              <span>Fourth-Year MBBS Student at Rai Medical College, Sargodha</span>
              <span>with a focused interest in surgery.</span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,.16)", paddingTop: "22px", color: "#E2C98E", fontSize: "17px", fontWeight: 700, letterSpacing: "2px" }}>
            <span>MBBS STUDENT / SESSION 2022-2027</span>
            <span>THE ART OF PRECISION</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
