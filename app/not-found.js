export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center"
      }}
    >
      <div>
        <p style={{ margin: 0, opacity: 0.7, letterSpacing: "0.16rem", textTransform: "uppercase" }}>
          Sistema fuera de rango
        </p>
        <h1 style={{ margin: "0.8rem 0 0" }}>404</h1>
      </div>
    </main>
  );
}
