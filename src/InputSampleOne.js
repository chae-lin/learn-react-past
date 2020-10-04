import React, {useState} from 'react';

function InputSampleOne() {
    const [text, setText] = useState('');
    //e 이벤트 객체: 이벤트 발생시 실행
    const changeEvent = (e) => {
        //현재 이벤트가 발생한 돔에 대한 정보를 갖고 있음
        setText(e.target.value);
    }
    const resetEvent = () => { 
        setText('');
    }

    return (
        <div>
          <input onChange={changeEvent} value={text} />
          <button onClick={resetEvent} style={{marginLeft: "5px"}}>초기화</button>
          <div>
            <b>값: {text}</b>
          </div>
        </div>
    );
}

export default InputSampleOne;