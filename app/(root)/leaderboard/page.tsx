import { withMetadata } from "@/app/utils/withMetadata";
import React from "react";

export const metadata = withMetadata(
  "Leaderboard",
  "Halaman tentang leaderboard pengguna"
);

const top3 = [
  { 
    rank: 1, 
    name: "Susi Pudjianti", 
    points: 12500, 
    medal: "/img/gold.png", 
    bgImage: "/img/goldp.jpg" 
  },
  { 
    rank: 2, 
    name: "Angel Wicaksono", 
    points: 12000, 
    medal: "/img/silver.png", 
    bgImage: "/img/silverp.jpeg" 
  },
  { 
    rank: 3, 
    name: "Siti Nurhalizah", 
    points: 11500, 
    medal: "/img/bronze.png", 
    bgImage: "/img/bronzep.jpg"
  },
];

const leaderboard = [
  { rank: 4, name: "Caca Permata Sari", points: 11000 },
  { rank: 5, name: "Kevin Wijaya", points: 10500 },
  { rank: 6, name: "Caca Permata Sari", points: 11000 },
  { rank: 7, name: "Kevin Wijaya", points: 10500 },
  { rank: 8, name: "Caca Permata Sari", points: 11000 },
  { rank: 9, name: "Kevin Wijaya", points: 10500 },
  { rank: 10, name: "Caca Permata Sari", points: 11000 },
  { rank: 11, name: "Kevin Wijaya", points: 10500 },
  { rank: 12, name: "Caca Permata Sari", points: 11000 },
  { rank: 13, name: "Kevin Wijaya", points: 10500 },
  { rank: 14, name: "Caca Permata Sari", points: 11000 },
  { rank: 15, name: "Kevin Wijaya", points: 10500 },
  { rank: 16, name: "Caca Permata Sari", points: 11000 },
  { rank: 17, name: "Kevin Wijaya", points: 10500 },
  { rank: 18, name: "Caca Permata Sari", points: 11000 },
];

const LeaderboardPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Top 3 Podium */}
        <div className="flex justify-center gap-10 w-full">
          {top3.map((user) => (
            <div
              key={user.rank}
              className="flex flex-col items-center shadow-lg p-6 w-60 rounded-lg text-black"
              style={{
                backgroundImage: `url(${user.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Medal */}
              <img
                src={user.medal}
                alt={`Medal ${user.rank}`}
                className="w-30 h-60 mb-20 mt-10"
              />
              {/* Profile photo */}
              <img
                src="img/profile.jpg"
                alt="profile"
                className="w-34 h-34 rounded-full mb-4"
              />
              {/* Name */}
              <h2 className="text-center font-semibold text-[30px] mb-20">
                {user.name}
              </h2>
              {/* Points */}
              <p className="mt-3">
                <span className="inline-flex items-center gap-2 bg-[#556FD7] text-white px-4 py-1.5 rounded-full font-bold shadow-md">
                  <img src="/img/star.png" alt="points" className="w-5 h-5" />
                  {user.points.toLocaleString()}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Nama</th>
                <th className="py-3 px-4">Poin</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-100`}
                >
                  <td className="py-3 px-4 font-semibold text-black">{user.rank}</td>
                  <td className="py-3 px-4 flex items-center gap-3 text-black">
                    <img
                      src="img/profile.jpg"
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                    {user.name}
                  </td>
                  <td className="py-3 px-4 text-black">{user.points.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
