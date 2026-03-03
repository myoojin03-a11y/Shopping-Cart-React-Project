import "./Card.css";
import { IoClose } from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa";
/*
  상품 카드 한 장을 그려주는 컴포넌트
  App.js에서 import 해서 불려질 컴포넌트

  1. props로 받은 데이터를 화면에 표시 name, price, qty
  2. 수량 -,+클릭시 상태값이 변경된다
  3. x삭제 버튼 클릭시 호출받아서 삭제한다
  
*/
const Card = ({ name, price, qty, onDelete, onQtyChange }) => {
  return (
    <div className='card'>
      {/*상품정보*/}
      <div className='card-info'>
        <p className='card-name'>{name}</p>
        <p className='card-price'>{price.toLocaleString()}원</p>
      </div>
      {/*수량조절*/}
      <div className='qty-row'>
        <button className='qty-btn'
          onClick={() => onQtyChange(qty - 1)}
          disabled={qty <= 1}
        ><FaMinus /></button>
        <span className='qty-value'>{qty}</span>
        <button className='qty-btn'
          onClick={() => onQtyChange(qty + 1)}
        ><FaPlus /></button>
      </div>
      {/*가격*/}
      <p className='card-total'>
        {(price * qty).toLocaleString()}원
      </p>
      {/*삭제버튼*/}
      <button className='delete-btn' onClick={onDelete}><IoClose /></button>
    </div>
  )
}

export default Card