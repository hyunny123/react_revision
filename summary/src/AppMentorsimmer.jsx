import { update } from "lodash";
import React, { useReducer, useState } from "react";
import { useImmer } from "use-immer";
import personReducer from "./reducer/person-reducer";

const initialPerson = {
  name: "제이크",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  //변경
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      //person에 있는 우리가 찾고자하는 멘토를 찾기
      const mentor = person.mentors.find((m) => m.name === prev);
      //그멘토를 가지고 와서 그멘토의 이름을 원하는 이름으로 바꿔주기
      mentor.name = current;
    });
  };
  //추가
  const handleAdd = () => {
    const name = prompt(`누구의 이름을 추가하고 싶은가요?`);
    const title = prompt(`직함은?`);
    updatePerson((person) => {
      //person에 mentors 배열에 새로운 객체를 푸시
      //실제 객체를 바로 수정하는 것처럼 사용가능
      person.mentors.push({ name, title });
    });
  };
  //삭제
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);

    updatePerson((person) => {
      //findIndex를 사용하여 내가 찾고자하는 이름인지
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토추가하기</button>
      <button onClick={handleDelete}>멘토삭제하기</button>
    </div>
  );
}
