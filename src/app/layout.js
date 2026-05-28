import './globals.css';

export const metadata = {
  title: 'Kranggan Center - Fisioterapi Profesional',
  description: 'Menjadi Lebih Sehat Dengan Fisioterapi. Layanan fisioterapi terbaik untuk pemulihan tubuh Anda.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
