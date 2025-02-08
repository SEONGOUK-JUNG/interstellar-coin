// React와 useState를 한 번만 불러오기
import React, { useState } from "react";
import "./App.css";  // 스타일 파일 불러오기

function App() {
  const [launched, setLaunched] = useState(false);  // 발사 상태 관리

  const handleLaunch = () => {
    setLaunched(true);  // 버튼 클릭 시 발사 상태로 변경
  };

  return (
    <div className={`App ${launched ? "launched" : ""}`}>  {/* 발사 상태에 따라 클래스 변경 */}

      {/* 별 애니메이션 */}
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>  {/* 별 밀도 추가 */}

      {/* 헤더 섹션 */}
      <header className="App-header">
        <h1>Interstellar Coin 🚀</h1>
        <p>{launched ? "Launching into space!" : "Are you ready to conquer the universe?"}</p>

        {/* Launch Now 버튼 */}
        <button className="launch-button" onClick={handleLaunch}>
          {launched ? "Launched!" : "Launch Now"}
        </button>
      </header>
    </div>
  );
}

export default App;
