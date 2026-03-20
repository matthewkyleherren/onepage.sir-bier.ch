export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#050505', 
      color: '#ffffff' 
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          SIR BIER
        </h1>
        <p style={{ fontSize: '1.125rem', opacity: 0.7 }}>
          Brewed, differently.
        </p>
      </div>
    </main>
  );
}
