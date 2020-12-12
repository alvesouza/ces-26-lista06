import logo from './logo.svg';
import React from 'react';
import './App.css';

class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {expression: '', result:null}
      this.calculate = this.calculate.bind(this)
  }
  calculate(){
      var expression = this.state.expression.replace("X", "*");
      try {
          var x = eval(expression);
          this.setState({expression: x.toString()})
      }catch (e) {
          console.log("Expressão Invalida")
      }
  }
  render(){
      return ([
        <div className="container-expression">{this.state.expression}</div>,
        <div className="grid-container">
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '+'});
            }}>+</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '-'});
            }}>-</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '/'});
            }}>/</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + 'X'});
            }}>X</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '7'});
            }}>7</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '8'});
            }}>8</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '9'});
            }}>9</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '('});
            }}>(</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '4'});
            }}>4</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '5'});
            }}>5</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '6'});
            }}>6</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + ')'});
            }}>)</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '1'});
            }}>1</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '2'});
            }}>2</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression + '3'});
            }}>3</button>
            <button className="grid-item" onClick={() => {
                this.setState({expression: this.state.expression.slice(0, -1)});
            }}>&lt;</button>
            <button className="grid-zero" onClick={() => {
                this.setState({expression: this.state.expression + '0'});
            }}>0</button>
            <button className="grid-zero" onClick={this.calculate}>=</button>
        </div>
        ]
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}
      <Calculator/>
      </header>
    </div>
  );
}

export default App;
