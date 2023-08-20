import "./App.css";

function App() {
  const name = "푸바오";
  const list = ["아이바오", "푸바오", "러바오","동바오","생바오"];
  return (
    <div>
      <h1 className="blue">{`Hello,${name}`}</h1>
      <ul>
        <li>아이바오</li>
        <li>{name}</li>
        <li>러바오</li>
      </ul>
      <ul>
        {list.map((item)=>(<li>{item}</li>))}
      </ul>
      <img
        style={{ width: "300px", height: "300px" }}
        src="https://images.unsplash.com/photo-1615824996195-f780bba7cfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt=""
      />
    </div>
  );
}

export default App;
