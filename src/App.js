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

  useEffect(() => {
    if (launched) {
      const interval = setInterval(() => {
        // 가격 범위를 0.0001 ~ 0.01로 설정
        const minPrice = 0.0001;
        const maxPrice = 0.01;
        const newPrice = +(Math.random() * (maxPrice - minPrice) + minPrice).toFixed(5);
        
        setPrice(newPrice);

        // 항성 매칭 로직 수정
        const currentPlanet = planets
          .slice()
          .reverse()
          .find(p => newPrice >= p.price) || planets[0];
        
        setPlanet(currentPlanet);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [launched]);

  // 우주선 위치 계산
  const rocketPosition = Math.min(Math.max(((price - 0.0001) / (0.01 - 0.0001)) * 60 + 20, 20), 80);

  return (
    <div className={`App ${launched ? "launched" : ""}`}>
      <div className="stars"></div>
      {!launched ? (
        <header className="App-header">
          <h1>Interstellar Coin 🚀</h1>
          <p>Are you ready to conquer the universe?</p>
          <button className="launch-button" onClick={() => setLaunched(true)}>
            Launch Now
          </button>
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

