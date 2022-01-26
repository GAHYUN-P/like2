import React from "react";
import Home from "./Home";
import Detail from "./Detail";
import styled from "styled-components";
import {  BrowserRouter , Routes,  Route} from "react-router-dom";
// import { Route, Routes } from "react-router-dom"; 
// 위에것으로 했을때는 계속 Cannot read properties of undefined (reading 'pathname') 에러가 났다.
// as는 라우터 별칭붙이는 기능이다.

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:week_day" element={<Detail />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

const Container = styled.div`
  max-width: 400px;
  min-height: 60vh;
  background-color: #d2d2ff;
  padding: 15px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;
export default App;