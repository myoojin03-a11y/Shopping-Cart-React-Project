# 🛒 장바구니 관리 React 프로젝트

## 1. 프로젝트 소개

이 프로젝트는 React의 상태 관리(useState)와
배열 메서드(map, filter, sort)를 활용하여
상품을 추가·삭제·정렬·수량 변경할 수 있는
간단한 장바구니 기능을 구현한 연습 프로젝트입니다.

사용자는
- 상품 추가
- 상품 삭제
- 수량 변경
- 가격 기준 정렬

기능을 직접 조작할 수 있습니다.

---

### 🔗 배포 링크 https://shopping-cart-react-project33.netlify.app/

### 🖥️ 데스크탑 화면
<p align="center">
  <img src="https://github.com/user-attachments/assets/0e2af930-7b3a-47c6-82b6-0ed01656bb2e" width="100%" />
</p>
---

## 2. 사용 기술

- **React (useState)** – 상품 추가, 삭제, 수량 변경 상태 관리
- **Vite** – 빠른 개발 서버 환경 구성
- **JavaScript (ES6+)** – map, filter, sort 활용
- **CSS3** – 레이아웃 및 UI 스타일링

---

## 3. 주요 기능

- useState를 활용한 상품 목록 상태 관리
- 배열 불변성 유지 (spread 연산자 사용)
- filter()를 이용한 상품 삭제
- map()을 활용한 리스트 렌더링
- sort()를 이용한 가격 기준 정렬
- props를 통한 자식 컴포넌트 데이터 전달

---

## 4. 프로젝트 구조

```bash
src
 ├── App.jsx
 ├── main.jsx
 └── Card
      ├── Card.jsx
      └── Card.css
```

---

## 5. 실행 방법

```bash
npm install
npm run dev
