// src/pages/Memes.jsx

import React from "react";

const memes = [
  {
    id: 1,
    title: "Когда деплой снова не работает",
    image: "/memes/deploy-meme.jpg",
  },
  {
    id: 2,
    title: "JS-разработчик после 2-х дней с React",
    image: "/memes/react-brain.jpg",
  },
  // Добавляй сюда новые мемы
];

export default function Memes() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold mb-6 text-center">Мемы нашей жизни</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {memes.map((meme) => (
          <div key={meme.id} className="bg-white p-4 shadow rounded">
            <img src={meme.image} alt={meme.title} className="rounded mb-3" />
            <h2 className="text-lg font-semibold text-center">{meme.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
