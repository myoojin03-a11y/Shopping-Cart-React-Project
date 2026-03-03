import { useState } from "react"
//useState는 화면에 영향을 주는 값이 변할때

function App() {

  //let [현재값, 바뀌는 값] = useState(처음값);
  //숫자 상태 - 카운터
  let [count, setCount] = useState(0);
  function increase() { setCount(count + 1); }
  function decrease() { setCount(count - 1); }

  //문자열 입력값 저장
  let [text, setText] = useState("");
  function handlechange(){
    setText(e.target.value);
  }
  //다크모드
  let [isDark, setIsDark] = usetate(false);
  function toggleMode(){
    setIsDark(!isDark);
  }
  return (
    <>
      <section>
        <p>{count}</p>
        <button onClick={increase}>중가</button>
        <button onClick={decrease}>감소</button>
      </section>
      <section>
        <input onChange={{handlechange}} />
        <p>입력값</p>
      </section>
      <section>
        <button onClick={{ toggleMode }}></button>
      </section>
    </>
  )
}

export default App
