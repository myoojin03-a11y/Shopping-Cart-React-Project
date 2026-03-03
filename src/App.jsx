import Card from "./Card/Card"
import { useState } from "react"
function App() {
  /*
   const [상태이름, set상태이름] = useState(초기값);
  */
  const [products, setProducts] = useState([
    { id: 1, name: "맥북 프로", price: 2490000, qty: 1 },
    { id: 2, name: "기계식 키보드", price: 150000, qty: 2 },
    { id: 3, name: "모니터 암", price: 89000, qty: 1 },
    { id: 4, name: "마우스 패드", price: 500000, qty: 3 },
  ]);
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [sortType, setSortType] = useState('default');


  /*
  상품 추가함수
  id를 Date.now()를 쓰는 이유
  현재시각 바꿔서 다른 값이 나오게 하는 편법
  간단한 예제에서 고유 id만드는 방법
  */
  const handleAdd = () => {
    const parsedPrice = parseInt(inputPrice);
    /* 이름이 비어있거나, 가격이 숫자가 아니면 */
    if (!inputName.trim() || isNaN(parsedPrice) || parsedPrice <= 0) return;
    setProducts([
      ...products,
      { id: Date.now(), name: inputName.trim(), price: parsedPrice, qty: 1 }
    ]);
  }

  /* 
  목록 정렬
  */
  const sorted = [...products].sort((a, b) => {
    if (sortType === 'price') return b.price - a.price; //높은 순
    return a.id - b.id; //기본순
  })
  /*
   삭제
   배열에서 특정항목 제거
   filter()는 조건이 true인 항목만 모아서 새 배열 반환
   setProducts(products.filter(item) => item.id !== id)
  */
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id))
  }
  /* 수량변경*/
  const handleQtyChange = (id, newQty) => {
    setProducts(products.map((p) => (
      p.id === id
        ? { ...p, qty: newQty } // 해당항목만 qty 교체
        : p //나머지는 그대로
    )));
  };

  /*
  정렬된 배열을 반환하는 함수
  products를 건들이지 않고 복사 후 정렬
  */
  const getSortedProducts = () => {

  }
  return (
    <div className="wrap">
      <div className="container">
        {/*헤더*/}
        <h2 className="title">장바구니</h2>
        <p className="sub-title">{products.length}개 상품</p>
        {/*상품추가*/}
        <div className="form-panel">
          <p className="form-title">상품추가</p>
          <div className="form-row">
            <input className="input" placeholder="상품명 *"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input className="input" placeholder="가격 (원) *"
              value={inputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            />
            <button className="btn" onClick={handleAdd}>추가</button>
          </div>
        </div>
        {/*정렬버튼*/}
        <div className="sort-row">
          {[
            { key: "default", label: "기본순" },
            { key: "price", label: "가격 높은순" },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setSortType(btn.key)}
              className="sort-btn active">
              {btn.label}
            </button>
          ))}
        </div>
        {/*카드목록
        배열.map((이름) => <컴포넌트이름 key={항목.id}>)
        key={항목.id}  항목을 추척하는 데 필요
        onQtyChange화살표 함수로 감싼 이유
        각 카드가 자신의 id를 알고있어야됨
        */}
        {sorted.map((p) => (
          <Card
            key={p.id}
            name={p.name}
            price={p.price}
            qty={p.qty}
            onDelete={() => handleDelete(p.id)}
            onQtyChange={(newQty) => handleQtyChange(p.id, newQty)}
          />
        ))}
      </div>
    </div>
  )
}

export default App