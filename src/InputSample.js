import React, {useState} from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        age: '',
        nickname: ''
        //객체 상태로 생성.
    });

    const {age, nickname} = inputs; // 비구조화 할당을 통해 값 추출
    
    const changeEvent = (e) => {
        const {name, value} = e.target; //e.target 에서 name 과 value의 값을 미리 추출. (e.target을 두번 입력하지 않도록)
        
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키가 가진 값을 value 로 설정

            // *객체 상태 업데이트 시에는 ...(스프레이드 문법)을 사용하여 객체를 복사 한 뒤, 특정 값을 덮어씌워 값을 업데이트 해줘야한다.
        });
    };
    const resetEvent = () => { 
        setInputs({
            age: '',
            nickname: '',
        });
    };

    return (
        <div>
          <input 
            name="age" 
            placeholder="나이을 입력해주세요."
            onChange={changeEvent}
            value={age}
        />
          <input 
            name="nickname" 
            placeholder="닉네임을 입력해주세요." 
            onChange={changeEvent}
            value={nickname}
        />
          <button onClick={resetEvent} style={{marginLeft: "5px"}}>초기화</button>
          <div>
            <b>값: </b>
            {age} ({nickname})
          </div>
        </div>
    );
}

export default InputSample;