import React from 'react';
import './App.css';
import Counter from './Counter';
import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';

function App() {
  const title = {
    margin: '0 0 10px',
    fontSize: '18px',
  };
  return (
    <>
        <Wrapper>
          <h1 style={title}>1. props를 통한 조건부 렌더링</h1>
          <Hello name="방문자" color="#ff9800" isSpecial />
          <Hello color="red" />
        </Wrapper>
        <Wrapper>
          <h1 style={title}>2. useState</h1>
          <Counter />
        </Wrapper>
        <Wrapper>
          <h1 style={title}>3. input 상태 관리</h1>
          <InputSample />
        </Wrapper>
    </>
  );
}

export default App;
