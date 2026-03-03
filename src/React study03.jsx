import Card01 from "./Card01";
function App() {
  let members = [
    { id: 1, name: "김철수", job: "프론트엔드 개발자", icon: "👨‍💻" },
    { id: 2, name: "이영희", job: "UI/UX 디자이너", icon: "🎨" },
    { id: 3, name: "박지민", job: "백엔드 엔지니어", icon: "⚙️" },
    { id: 4, name: "최유나", job: "프로젝트 매니저", icon: "📅" },
    { id: 5, name: "정호석", job: "데이터 분석가", icon: "📊" }
  ];
  return (
    <div className="cardWrap">
      {/*
     배열.map((이름, 인덱스)=>{return 새값})
     key 목록을 렌더링 할때 항목 구분
     */}
      {members.map((member) => {
        return (
          <Card01
            key={member.index}
            name={member.name}
            job={member.job}
            icon={member.icon}
          />
        );
      })}
    </div>
  )
}
export default App