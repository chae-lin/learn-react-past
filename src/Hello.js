import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div>
            안녕하세요 
            <span style={{color}}>{name}</span>님
            { isSpecial && <b>*</b> }
        </div>
    );
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;