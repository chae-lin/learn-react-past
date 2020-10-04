import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    // const [상태 값 저장 변수, 상태 값 갱신 함수 = useState(상태 초기 값)]

    const onIncrease = () => {
        setNumber(number + 1);
        //(1) 원래 setNumber 파라미터에는 위와 같이 업데이트 할 새로운 값을 넣어주는데,
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }

    {/* 
    //함수형 업데이트
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        //(2) 위와 같이 기존 값을 업데이트 하는 함수를 넣어 업데이트할수도 있다. 이와 같은 함수형 업데이트는 컴포넌트를 최적화 할 때 주로 사용한다.
    }
    // :상태 값 갱신 함수 setNumber는 파라미터로 전달받은 prevNumber을 최신 상태로 설정해준다.
    
    const onDecrease = () => {
    setNumber(prevNumber => prevNumber - 1);
    }
    */}

    return (
        <>
            <h2 style={{margin: "0 0 5px"}}>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}

export default Counter;