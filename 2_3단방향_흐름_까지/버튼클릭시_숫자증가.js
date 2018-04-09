import React from 'react';
import ReactDOM from 'react-dom';

class Person extends React.Component{
    render(){
        let person =this.props.value;
        return <tr>
                <td>{person.name}</td>
                <td>{person.age}</td>
            </tr>
    }
}

class PersonList extends React.Component{
    render(){
        
        
        let persons = this.props.list;
        let tagList = persons.map( (person)=> <Person value={person}/>);
        return <table border="1" width="90%">{tagList}</table>;
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={persons:this.props.persons};
        this.increaseAge = this.increaseAge.bind(this);
    }

    increaseAge(){
        let persons=this.state.persons;
        for(let i=0;i<persons.length;++i)
            persons[i].age++;
        this.setState({persons:persons});
    }

    render(){
        return <div>
                    <PersonList list ={this.state.persons} />
                    <button onClick ={this.increaseAge} > increase age</button>
                </div>;
    }
}

let persons=[{name:"홍길동",age:"24"},{name:'hyunwoo',age:'25'}];
ReactDOM.render(<App persons={persons}/>,
    document.getElementById('root'));

if(module.hot){
    module.hot.accept();
}