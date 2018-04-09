import React from 'react';
import ReactDOM from 'react-dom';
//숫자 목록을 출력하는 확장태그
function NumberList(props){
    let numbers = props.numbers;
    let list = numbers.map((value)=><li>{value}</li>);
    return <ul>{list}</ul>;
}

ReactDOM.render(<NumberList numbers={[21,22,23,24,25,26]}/>,
    document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}