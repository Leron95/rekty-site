import meme1 from "./assets/deploy-success.jpg"; // добавь свои мемы
import meme2 from "./assets/why-works.jpg";
import "./MemesPage.css"; // если хочешь стили отдельно

const memes = [
  { title: "Когда деплой прошёл с первого раза", src: meme1 },
  { title: "Когда всё работает, но ты не знаешь почему", src: meme2 },
];

export default function MemesPage() {
  return (
    <div className="memes-page">
      <h1>Мемы нашей жизни</h1>
      <div className="memes-grid">
        {memes.map((meme, index) => (
          <div key={index} className="meme-card">
            <img src={meme.src} alt={meme.title} />
            <p>{meme.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
