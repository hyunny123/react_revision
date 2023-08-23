import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("clicked!!");
  };
  return (
    <div>
      <button onClick={handleClick}>버튼</button>
      <Avatar image="https://images.unsplash.com/photo-1619650277752-9b853abf815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
      <Profile
        image="https://images.unsplash.com/photo-1619650277752-9b853abf815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        name="hyunny"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1597826368522-9f4cb5a6ba48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        name="hyunny"
        title="프론트엔드 개발자"
        isNew={false}
      />
      <Profile
        image="https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        name="hyunny"
        title="프론트엔드 개발자"
        isNew={true}
      />
    </div>
  );
}

export default AppProfile;
