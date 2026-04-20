import "./globals.css";

export const metadata = {
  title: "Chapulin Colorado Game HUD",
  description: "Mini experiencia web estilo videojuego del Chapulin Colorado."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
