import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, a] = useState("남자 코트 추천");
  let [글제목1, b] = useState("강남 우동 맛집");
  let [글제목2, c] = useState("파이썬 독학");

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목1}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;