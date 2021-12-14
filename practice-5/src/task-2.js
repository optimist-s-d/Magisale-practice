import React from "react";
import Input from "./Input";
import Button from "./Button";

class Calculator extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            operand1: "",
            operand2: "",
            result: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        const value = e.target.value.replace(/[^0-9]+/g, "");
        if(e.target.name === "result"){
            return false;
        }
        this.setState({
            [e.target.name]: value
        });
    }

    handleClick(e){
        let firstValue = parseInt(this.state.operand1);
        let secondValue = parseInt(this.state.operand2);
        switch(e.target.name){
            case "Clear":
                this.setState({
                    operand1: 0,
                    operand2: 0,
                    result: 0
                });
                break;
            case "Add":
                this.setState({
                    result: firstValue + secondValue
                });
                break;
            case "Subtract":
                this.setState({
                    result: firstValue - secondValue
                });
                break;
            case "Multiply":
                this.setState({
                    result: firstValue*secondValue
                });
                break;
            case "Divide":
                this.setState({
                    result: firstValue/secondValue
                });
                break;
        }
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3"><Input placeholder="Operand 1" name="operand1" onChange={this.handleChange} inputValue={this.state.operand1}/></div>
                    <div className="col-3"><Input placeholder="Operand 2" name="operand2" onChange={this.handleChange} inputValue={this.state.operand2}/></div>
                    <div className="col-2"><Button class="btn btn-block btn-danger" name="Clear" onClick={this.handleClick} /></div>
                </div>
                <div className="row my-3">
                    <div className="col-2"><Button class="btn btn-block btn-secondary" name="Add" onClick={this.handleClick} /></div>
                    <div className="col-2"><Button class="btn btn-block btn-secondary" name="Subtract" onClick={this.handleClick} /></div>
                    <div className="col-2"><Button class="btn btn-block btn-secondary" name="Multiply" onClick={this.handleClick} /></div>
                    <div className="col-2"><Button class="btn btn-block btn-secondary" name="Divide" onClick={this.handleClick} /></div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Input placeholder="Result" name="result" inputValue={this.state.result} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;