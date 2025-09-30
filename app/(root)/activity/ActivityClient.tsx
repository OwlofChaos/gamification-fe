"use client";

import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const topActivities = [
  { id: 1, type: "SELF PRACTICE", title: "Lat Mandiri: Bab 3", subject: "Fisika", questions: 15, button: "Mulai" },
  { id: 2, type: "QUIZ", title: "Quiz Bab 3", subject: "Biologi", questions: 30, button: "Mulai" },
  { id: 3, type: "TRYOUT", title: "Tryout Akhir Tahun", subject: "Matematika Wajib", questions: 40, button: "Kerjakan" },
  { id: 4, type: "MINI GAME", title: "Tebak Gambar", subject: "Kimia", questions: 20, button: "Main" },
  { id: 5, type: "MINI GAME", title: "Tebak Chemical", subject: "Kimia", questions: 20, button: "Main" },
  { id: 6, type: "MINI GAME", title: "Tebak Kekuatan", subject: "Fiska", questions: 20, button: "Main" },
  { id: 7, type: "TRYOUT", title: "Tryout Akhir Tahun", subject: "Fisika", questions: 40, button: "Kerjakan" },
  { id: 8, type: "MINI GAME", title: "Tebak Gambar", subject: "Biologi", questions: 20, button: "Main" },
  { id: 9, type: "SELF PRACTICE", title: "Lat Mandiri: Bab 4", subject: "Kimia", questions: 15, button: "Mulai" },
];

const latestActivities = [
  { id: 1, type: "SELF PRACTICE", title: "Lat Mandiri: Bab 4", subject: "Matematika Wajib", questions: 15, button: "Mulai" },
  { id: 2, type: "QUIZ", title: "Quiz Bab 4", subject: "Matematika Peminatan", questions: 30, button: "Mulai" },
  { id: 3, type: "TRYOUT", title: "Tryout Akhir Tahun", subject: "Fisika", questions: 40, button: "Kerjakan" },
  { id: 4, type: "MINI GAME", title: "Tebak Gambar", subject: "Biologi", questions: 20, button: "Main" },
  { id: 5, type: "SELF PRACTICE", title: "Lat Mandiri: Bab 4", subject: "Kimia", questions: 15, button: "Mulai" },
  { id: 6, type: "SELF PRACTICE", title: "Lat Mandiri: Bab 3", subject: "Fisika", questions: 15, button: "Mulai" },
  { id: 7, type: "QUIZ", title: "Quiz Bab 3", subject: "Biologi", questions: 30, button: "Mulai" },
  { id: 8, type: "TRYOUT", title: "Tryout Akhir Tahun", subject: "Matematika Wajib", questions: 40, button: "Kerjakan" },
  { id: 9, type: "MINI GAME", title: "Tebak Gambar", subject: "Kimia", questions: 20, button: "Main" },
];

export default function ActivityClient() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;
  const maxIndex = Math.ceil(topActivities.length / visibleCount) - 1;
  const cardWidth = 360 + 65;
  const offset = currentIndex * cardWidth * visibleCount;

  const [latestIndex, setLatestIndex] = useState(0);
  const latestVisible = 5;
  const latestMax = Math.ceil(latestActivities.length / latestVisible) - 1;
  const latestCardWidth = 320 + 40;
  const latestOffset = latestIndex * latestCardWidth * latestVisible;


  
  const next = () => currentIndex < maxIndex && setCurrentIndex(currentIndex + 1);
  const prev = () => currentIndex > 0 && setCurrentIndex(currentIndex - 1);  

  return (
    <>
      {/* Hero Section */}
      <section
        className={`relative w-full h-[750px] flex items-center justify-center text-white ${poppins.className}`}
        style={{
          backgroundImage: "url('/img/activity-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 w-full p-30">
          <h1 className="text-4xl font-bold mb-2">Aktivitas Belajar</h1>
          <p className="mb-6 text-lg">Temukan berbagai tugas, quiz, dan game seru!</p>

          {/* Filters (kept unchanged) */}
          <div className="flex flex-wrap items-start gap-10 w-full">
            <select className="custom-select flex-1 min-w-[150px] max-w-[400px] p-3 pr-12 rounded-lg bg-white text-black appearance-none border-none outline-none">
              <option>Mata Pelajaran</option>
              <option>Matematika</option>
              <option>Bahasa</option>
              <option>Sains</option>
            </select>
            <select className="custom-select flex-1 min-w-[150px] max-w-[400px] p-3 pr-12 rounded-lg bg-white text-black appearance-none border-none outline-none">
              <option>Tipe Aktivitas</option>
              <option>Tugas</option>
              <option>Quiz</option>
              <option>Game</option>
            </select>
            <select className="custom-select flex-1 min-w-[150px] max-w-[400px] p-3 pr-12 rounded-lg bg-white text-black appearance-none border-none outline-none">
              <option>Kelas</option>
              <option>Kelas 1</option>
              <option>Kelas 2</option>
              <option>Kelas 3</option>
            </select>

            <div className="flex flex-col flex-[2] min-w-[300px] gap-5">
              <div className="flex rounded-[12px] overflow-hidden border border-gray-300 bg-white">
                <input type="text" placeholder="Cari aktivitas..." className="flex-1 p-3 text-black outline-none" />
                <button className="flex items-center justify-center px-4 bg-[#556FD7] border border-[#556FD7]">
                  <img src="/img/search.png" alt="Search" className="w-5 h-5" />
                </button>
              </div>
              <button className="flex gap-2 px-5 py-3 text-sm bg-[#556FD7] hover:bg-blue-700 rounded-[12px] min-w-[100px] max-w-[250px]">
                <img src="/img/empty-filter-xxl.png" alt="filter" className="w-5 h-5" /> Terapkan Filter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Aktivitas Section */}
        <section className="w-full py-26 px-20 bg-gray-50 relative">
            <h2 className="text-3xl font-bold mb-10 text-black">Top 10 Aktivitas</h2>

            <div className="relative">
                {/* Viewport */}
                <div className="overflow-hidden px-20 py-20">
                {/* Track */}
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-15"
                    style={{
                        transform: `translateX(-${offset}px)`,
                        width: `${topActivities.length * cardWidth}px`,
                    }}
                >
                    {topActivities.map((activity, index) => (
                    <div key={activity.id} className="relative flex-shrink-0 w-[360px] px-3">
                        {/* Number */}
                        <div
                        className="absolute -left-10 top-95 flex items-center justify-center w-10 h-10 text-[100px] font-bold text-transparent"
                        style={{ WebkitTextStroke: "4px black" }}
                        >
                        {index + 1}
                        </div>

                        {/* Card */}
                        <div className="bg-white rounded-lg shadow p-5 flex flex-col">
                        <span className="inline-block px-3 py-1 w-[200px] text-[20px] font-semibold bg-[#8A8AE1] rounded-full mb-2 text-white text-center">
                            {activity.type}
                        </span>

                        <img
                            src="/img/activity.jpg"
                            alt={activity.title}
                            className="mb-4 w-50 h-50 object-contain"
                        />

                        <h3 className="font-bold text-lg mb-1 text-black text-[28px]">
                            {activity.title}
                        </h3>

                        <p className="text-[22px] text-gray-600 mb-2 flex items-center gap-2">
                            <img src="/img/book.png" alt="Book" className="w-6 h-6" />
                            {activity.subject}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                            <p className="text-[22px] text-gray-600 flex items-center gap-2">
                            <img src="/img/clipboard.png" alt="Clipboard" className="w-6 h-6" />
                            {activity.questions} Soal
                            </p>
                            <button className="flex items-center gap-2 bg-[#556FD7] hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                            {activity.button}
                            <span className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-white"></span>
                            </button>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>

                {/* Prev Button */}
                {currentIndex > 0 && (
                <button
                    onClick={prev}
                    className="absolute left-5 top-1/2 -translate-y-1/2 
                            bg-[#556FD7] text-white rounded-full 
                            w-14 h-14 flex items-center justify-center 
                            shadow hover:bg-blue-700 transition"
                >
                    <span className="text-3xl font-bold">‹</span>
                </button>
                )}

                {/* Next Button */}
                {currentIndex < maxIndex && (
                <button
                    onClick={next}
                    className="absolute right-5 top-1/2 -translate-y-1/2 
                            bg-[#556FD7] text-white rounded-full 
                            w-14 h-14 flex items-center justify-center 
                            shadow hover:bg-blue-700 transition"
                >
                    <span className="text-3xl font-bold">›</span>
                </button>
                )}
            </div>
        </section>
        {/* --- Aktivitas Terbaru Section --- */}
        <section className="w-full py-16 px-20 bg-[#f9f9ff] relative ">
          <h2 className="text-2xl font-bold mb-8 text-black">Aktivitas Terbaru</h2>

          <div className="relative">
            {/* Viewport */}
            <div className="overflow-hidden w-full">
              {/* Track */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${latestIndex * 100}%)`,
                  width: `${latestActivities.length * (100 / 5)}%`, // total track width for 5 visible
                }}
              >
                {latestActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="bg-white rounded-lg shadow p-6 flex-shrink-0 flex flex-col"
                    style={{ width: "20%", height: "400px" }} // 1/5 width
                  >
                    {/* Badge */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-3 py-1 bg-[#8A8AE1] text-white text-sm rounded-full">
                        {activity.type}
                      </span>
                      <span className="px-2 py-1 bg-[#64A4F6] text-white text-sm rounded-md">
                        BARU
                      </span>
                    </div>

                    {/* Image */}
                    <img
                      src="/img/activity.jpg"
                      alt={activity.title}
                      className="w-full h-40 object-contain mb-3"
                    />

                    {/* Title */}
                    <h3 className="font-bold text-xl mb-2 text-black">{activity.title}</h3>

                    {/* Subject */}
                    <p className="text-gray-600 mb-3 flex items-center gap-2 text-lg">
                      <img src="/img/book.png" alt="Book" className="w-6 h-6" />
                      {activity.subject}
                    </p>

                    {/* Questions + Button */}
                    <div className="mt-auto flex items-center justify-between">
                      <p className="text-gray-600 flex items-center gap-2 text-lg">
                        <img src="/img/clipboard.png" alt="Clipboard" className="w-6 h-6" />
                        {activity.questions} Soal
                      </p>
                      <button className="flex items-center gap-2 bg-[#556FD7] hover:bg-blue-700 text-white px-5 py-2 rounded-full text-base">
                        {activity.button}
                        <span className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-white"></span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev Button */}
            {latestIndex > 0 && (
              <button
                onClick={() => setLatestIndex(latestIndex - 1)}
                className="absolute -left-6 top-1/2 -translate-y-1/2 
                  bg-[#556FD7] text-white rounded-full 
                  w-14 h-14 flex items-center justify-center 
                  shadow hover:bg-blue-700 transition"
              >
                ‹
              </button>
            )}

            {/* Next Button */}
            {latestIndex < Math.ceil(latestActivities.length / 5) - 1 && (
              <button
                onClick={() => setLatestIndex(latestIndex + 1)}
                className="absolute -right-6 top-1/2 -translate-y-1/2 
                  bg-[#556FD7] text-white rounded-full 
                  w-14 h-14 flex items-center justify-center 
                  shadow hover:bg-blue-700 transition"
              >
                ›
              </button>
            )}
          </div>
        </section>
    </>
  );
}