import React, { useState } from "react";
import styled from "styled-components";

const Star = (props) => {
  const [count, setCount] = useState(0);
  // count는 현재 상태 값 변수, setCount는 상태값을 갱신해주는 Setter 함수
  // useState() 괄호 안의 값은 상태의 초기 값
  // useState는 현재값을 저장하는 기능과 업데이트 하는 함수를 쌍으로 제공한다.
  // 해당 기능을 이용하면 컴포넌트가 다시 랜더링이 되어도 state값이 그대로 유지된다.
  const star_count = Array.from({ length: 5 }, (v, i) => i);
  // length 5인 배열 [0,1,2,3,4]
  const starCount = (props) => {
    setCount(props.idx + 1);
    // props는 dictionary 형태다...?
    console.log(props)
  };

  return (
    <div style={{ display: "flex" }}>
      {star_count.map((num, idx) => {
        //다섯번 돌아간다
        //idx가 string으로 들어갈 수 있다.
        console.log(idx);
        return (
          <Circle
            onClick={() => {
              starCount({ idx });
            }}
            key={idx}
            // 키값안주면 오류뜸. 겉으로 보이는 기능은 없음..
            // 보통 키값은 데이터의 id를 가져옴
            style={
              idx < count
                ? { backgroundColor: "#A6A4A5" }
                : { backgroundColor: "#f9ffff" }
            }
          ></Circle>
        );
      })}
    </div>
  );
};

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #ddd;
  margin: 5px;
  display: flex;
`;

export default Star;