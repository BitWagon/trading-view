import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to Business Management System</h1>
        <p>Please login or register to continue</p>

        <div style={{ marginTop: '20px' }}>
          <Link href="/login">Login</Link>
          <span style={{ margin: '0 10px' }}>|</span>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </main>
  );
}
