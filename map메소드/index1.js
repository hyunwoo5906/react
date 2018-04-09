import React from 'react';
import ReactDOM from 'react-dom';


    let a1=[1,2,3,4,5];
    let a2 = a1.map((value) => <li>{value*2}</li>);


ReactDOM.render(<ul>{a2}</ul>,document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}