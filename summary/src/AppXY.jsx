import React, { useState } from "react";
import "./AppXY.css";

export default function AppXY() {
  //x와 y를 개별적으로 설정하여 좌표구하기
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  //좌표라는 객체
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  return (
    <div
      className="container"
      onPointerMove={(e) => {
        console.log(e.clientX, e.clientY);
        // setX(e.clientX);
        // setY(e.clientY);
        setPosition({ x: e.clientX, y: e.clientY });
        //수평으로만 이동이 가능하다면? y값은 고정 
        //z값도 받을 경우 yz 다 고정이므로 스프레드 연산자 사용
        // setPosition((prev) => ({ ...prev, x: e.clientX }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      />
    </div>
  );
}
