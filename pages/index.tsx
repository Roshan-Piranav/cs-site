import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const meta = {
  layout: false,
};

export default function OpeningPage() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in immediately
    setVisible(true);

    // Start fade out after 2s, then redirect after another 1s
    const fadeOutTimer = setTimeout(() => {
      setVisible(false); // trigger fade out
    }, 2000);

    const redirectTimer = setTimeout(() => {
      router.push("/home");
    }, 2000); // total duration: 3s

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div
      style={{
        backgroundColor: "#2A82D9",
        color: "#FFFFFF",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        DOCS <sup style={{ fontSize: "1.2rem" }}> </sup> TO WORDPRESS PRO
      </h1>
      <p style={{ fontSize: "1.2rem" }}>Know more about Docs to WordPress</p>
    </div>
  );
}
