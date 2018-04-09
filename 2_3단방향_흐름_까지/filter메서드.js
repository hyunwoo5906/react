import React from 'react';
import ReactDOM from 'react-dom';

let num= " 1,2,3,4,5,6,7,8,9,10".split(",");
let even = num.filter((i)=>i%2===0);

ReactDOM.render(<h2>{even  }</h2>,
    document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}