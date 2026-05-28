import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, date, time } = body;

    // 1. Validasi Input data dari Frontend
    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, message: 'Harap isi semua kolom formulir!' },
        { status: 400 }
      );
    }

    // 2. Simulasi Penyimpanan ke Database (Sistem Nyata akan di-save ke MongoDB/Postgres)
    console.log("Data Booking Masuk ke Kranggan Center Server:", { name, phone, date, time });

    // 3. Respon Sukses Balik ke Tampilan Pasien
    return NextResponse.json({ 
      success: true, 
      message: 'Data reservasi berhasil diterima sistem.' 
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Terjadi masalah pada internal server.' },
      { status: 500 }
    );
  }
}