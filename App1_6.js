import React, { Component } from 'react';
import './App.css';
//1.6 실습
//user 객체를 만들고 jsx 문법으로 firstname과 lastname을
//표시합니다.
//render() 메서드 안에 user 프로퍼티를 사용합니다.
class App extends Component {
  render() {
    let hello = '리액트에 오신 여러분을 환영합니다.';
    let user =  {
      firstname:'hyunwoo' ,
      lastname:'jeon'
    };
    return (
      
      <div className="App">
        <h2>{hello}{user.lastname}</h2>
        <h2>{user.firstname}</h2>
      </div>
    );
  }
}

export default App;
