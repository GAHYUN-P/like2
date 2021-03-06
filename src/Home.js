import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// 페이지 이동

const Home = (props) => {
  const wbox = ["월", "화", "수", "목", "금", "토", "일"];
  let Nowdate = new Date().getDay();
  const [week_days,setWeek] = useState([...wbox.slice(Nowdate - 1, 7),...wbox.slice(0, Nowdate - 1)])
  let navigate = useNavigate();
  const star_count = Array.from({ length: 5 }, (v, i) => i);
  // [0,1,2,3,4]


  return (
    <Container>
      <Title>내 일주일은?</Title>
      <ListStyle>
        {week_days.map((day, index) => {
          let random = Math.floor(Math.random() * 5 + 1);
          // Math.floor 소수점 아래 버림(Math.random이 부동소수점 난수를 생성하기 때문)
          // Math.floor(Math.random() * 5)는 0~4.9999... 즉, 0~4 범위의 정수
          // 평점은 1 부터니까 +1을 해줌

          return (
            <ItemStyle key={index}>
              <span>{day}</span>
              <div>
                {star_count.map((num, idx) => {
                  return (
                    <Star
                      key={idx}
                      style={
                        idx < random
                          ? { backgroundColor: "#A6A4A5" }
                          : { backgroundColor: "#f9ffff" }
                      }
                    ></Star>
                  );
                })}
              </div>
              <Button
                onClick={() => {
                  navigate(`./Detail/${day}`);
                  // 페이지 이동
                }}
              ></Button>
            </ItemStyle>
          );
        })}
      </ListStyle>
    </Container>
  );
};

const Container = styled.div`
  padding: 5px;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem 0px;
`;
const ItemStyle = styled.div`
  padding: 5px;
  margin: 5px;
  /* background-color: aliceblue; */
  display: flex;
  span {
    width: 20px;
    height: 20px;
    padding: 10px;
    margin: 4px 4px 0 0;
    background-color: white;
    border-radius: 5px;
    font-weight: bold;
    color: #0D0D0D;
    text-align: center;
  }
  div {
    display: flex;
  }
`;

const Star = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #f9ffff;
  margin: 5px;
  display: flex;
`;

const Button = styled.div`
  width: 0px;
  height: 0px;
  border-left: 40px solid #0D0D0D;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  margin: 5px;
  display: flex;
  &:hover {
    border-left: 40px solid #595959;
  }
`;

export default Home;