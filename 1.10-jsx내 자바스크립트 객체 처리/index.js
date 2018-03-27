import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
//Hot Module Replacement -브라우저 내 어플리케이션을 재실행하는 도구
if(module.hot){
    module.hot.accept();
}