import React from 'react';
import ReactDOM from 'react-dom';
//person 목록을 출력하는 확장태그
function PersonList(props){
    let persons = props.list;
    let trTagList = persons.map(
        (person) =>
                <tr>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                </tr>
    );
    return <table border="1">{trTagList}</table>;
}

let persons=[{name:"홍길동",age:"24"},{name:'hyunwoo',age:'25'}];
ReactDOM.render(<PersonList list={persons}/>,
    document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}