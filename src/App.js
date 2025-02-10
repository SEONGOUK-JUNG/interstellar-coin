import React, { useState, useEffect } from "react";
import "./App.css";

const planets = [
  { name: "Earth", price: 0.0001 },
  { name: "Solar System Edge", price: 0.002 },
  { name: "Alpha Centauri", price: 0.004 },
  { name: "Milky Way", price: 0.006 },
  { name: "Andromeda", price: 0.008 },
  { name: "Intergalactic Space", price: 0.009 },
  { name: "Edge of the Universe", price: 0.01 }
];

function App() {
  const [launched, setLaunched] = useState(false);
  const [price, setPrice] = useState(0);
  const [planet, setPlanet] = useState(planets[0]);

  // 페이지 로드 시 화면 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Launch 버튼 클릭 시 스크롤 상단 이동 및 가격 업데이트 시작
  const handleLaunch = () => {
    setLaunched(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 부드럽게 상단으로 스크롤
  };

  // 가격 업데이트 로직
  useEffect(() => {
    if (launched) {
      const interval = setInterval(() => {
        const minPrice = 0.0001;
        const maxPrice = 0.01;
        const newPrice = +(Math.random() * (maxPrice - minPrice) + minPrice).toFixed(5);

        setPrice(newPrice);

        const currentPlanet = planets
          .slice()
          .reverse()
          .find(p => newPrice >= p.price) || planets[0];

        setPlanet(currentPlanet);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [launched]);

  const rocketPosition = Math.min(Math.max(((price - 0.0001) / (0.01 - 0.0001)) * 60 + 20, 20), 80);

  return (
    <div className={`App ${launched ? "launched" : ""}`}>
      <div className="stars"></div>
      {!launched ? (
        <header className="App-header">
          <h1>Interstellar Coin 🚀</h1>
          <p>Are you ready to conquer the universe?</p>
          <button className="launch-button" onClick={handleLaunch}>
            Launch Now
          </button>

          {/* About Section */}
          <div className="about-section">
            <h2>Welcome to Interstellar Coin 🌌</h2>
            <p>
              Interstellar Coin isn't just a meme coin—it's your ticket to the stars! 🚀 <br /><br />
              Start your journey from <strong>Earth</strong>, pass through the <strong>Solar System Edge</strong>, explore <strong>Alpha Centauri</strong>, 
              navigate the <strong>Milky Way</strong>, fly beyond <strong>Andromeda</strong>, cross the <strong>Intergalactic Space</strong>, and finally, 
              reach the <strong>Edge of the Universe</strong>! ✨<br /><br />
              As the price rises, your rocket ventures deeper into the cosmos. If it falls, you'll safely return to Earth. 🌍 <br /><br />
              Ready to conquer the universe? Join us now! 🚀
            </p>

            {/* Call to Action Button */}
            <a href="https://pump.fun/coin/8pn7vZJF5kYetg6zaSBsRA59NDnqYdpDwREFNUWkpump?coins_sort=market_cap" className="join-button" target="_blank" rel="noopener noreferrer">
              Buy Interstellar Coin 🌌
            </a>
          </div>

        </header>
      ) : (
        <div>
          <div className="planets">
            {planets.map((p) => (
              <span key={p.name} className="planet">{p.name}</span>
            ))}
          </div>
          <div
            className="rocket"
            style={{ left: `${rocketPosition}%` }}
          >
            🚀
          </div>
          <div className="price-info">
            <p>Current Price: ${price}</p>
            <p>🚀 Currently at: {planet.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
