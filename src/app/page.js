'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', date: '', time: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert(`Halo ${formData.name}, booking Anda berhasil disimpan! Tim Kranggan Center akan menghubungi Anda via WhatsApp.`);
        setFormData({ name: '', phone: '', date: '', time: '' });
      } else {
        alert('Gagal: ' + data.message);
      }
    } catch (error) {
      alert('Terjadi kesalahan koneksi server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* NAVBAR */}
      <nav className="bg-white shadow-sm border-b-4 border-blue-500 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-green-600">Kranggan</span>
            <span className="text-blue-600">Center</span>
          </div>
          <div className="hidden md:flex space-x-6 font-medium">
            <a href="#layanan" className="hover:text-green-600 transition">Layanan</a>
            <a href="#booking" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-green-600 transition shadow-md">
              Janji Temu
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Kranggan <span className="text-blue-600">Center</span>
        </h1>
        <p className="text-lg md:text-xl font-bold text-green-600 tracking-wider uppercase mb-8">
          "Menjadi Lebih Sehat Dengan Fisioterapi"
        </p>
        <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed mb-8">
          Pulihkan gerak, redakan nyeri, dan optimalkan aktivitas fisik Anda bersama tim fisioterapi ahli kami. Penanganan personal dan profesional.
        </p>
        <a href="#booking" className="bg-green-600 text-white text-lg font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105">
          Jadwalkan Konsultasi
        </a>
      </header>

      {/* FORM BOOKING */}
      <section id="booking" className="max-w-3xl mx-auto my-20 p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-slate-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Reservasi Online</h2>
          <p className="text-slate-500 mt-2">Isi formulir di bawah ini untuk mengamankan slot terapi Anda</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap Pasien</label>
            <input 
              type="text" required value={formData.name}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              placeholder="Contoh: Ahmad Fauzi"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Nomor WhatsApp (Aktif)</label>
            <input 
              type="tel" required value={formData.phone}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              placeholder="Contoh: 08123456789"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Pilih Tanggal Kunjungan</label>
            <input 
              type="date" required value={formData.date}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Pilih Jam Kedatangan</label>
            <input 
              type="time" required value={formData.time}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            />
          </div>
          <div className="md:col-span-2 text-center mt-6">
            <button 
              type="submit" disabled={loading}
              className="w-full md:w-auto bg-blue-600 text-white font-bold px-12 py-4 rounded-xl hover:bg-green-600 shadow-md transition disabled:bg-slate-400"
            >
              {loading ? 'Memproses...' : 'Konfirmasi Jadwal Sekarang'}
            </button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-12 text-center border-t-4 border-green-500">
        <p className="font-semibold text-base">© {new Date().getFullYear()} Kranggan Center. Hak Cipta Dilindungi.</p>
        <p className="text-slate-400 text-sm mt-2 italic">Menjadi Lebih Sehat Dengan Fisioterapi</p>
      </footer>
    </div>
  );
}