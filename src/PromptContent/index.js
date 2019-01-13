import React from 'react';
import './PromptContent.css';
import {
    Button,
    Input,
    TextField,
    FilledInput,
    LinearProgress
} from '@material-ui/core';
import {handleResponseList} from './../storage.js'
import {questions} from './../Constants/questions'
import {totalList} from '../storage.js'

export default class PromptContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qnum: 0,
            responses: [''],

        }
    }

    getAllResponses(){
        let responseList = questions.slice();
        for(let i = 0; i < questions.length; i++){
            responseList[i] = {
                question: responseList[i], 
                answer: this.state.responses[i]
            }
        }
        return responseList;
    }

    render(){
        const lineProgress = <LinearProgress variant="determinate" value={this.state.qnum / questions.length * 100}></LinearProgress>
        if(this.state.qnum >= questions.length){
            // Program enters here once we reached the end of the list of questions
            let responseList = this.getAllResponses();
            handleResponseList(responseList);
            for(let i = 0; i < questions.length; i++){
                responseList[i] = <li><b>{responseList[i].question + " "}</b> {responseList[i].answer}</li>
            }
            return (
                <div className="wrapper">
                    {lineProgress}
                    <h2>DONE</h2>
                    <ul>
                    {responseList}
                    </ul>
                    
                </div>)
        }

        return (
            <div className="wrapper">
                <div className="content">
                    {lineProgress}
                    <h1>Prompt {this.state.qnum + 1}</h1>
                    <div className="question">{questions[this.state.qnum]}</div>
                    <FilledInput 
                        type="text"
                        multiline={true}
                        rows="5"
                        id="responseBox"
                        label="Your Answer"
                        ></FilledInput>
                </div>
                <div className="buttons">
                    <Button
                        variant="contained" 
                        color="primary"
                        disabled={this.state.qnum == 0} 
                        onClick={() => this.handleClick(-1)} 
                        type="button">
                            Back
                        </Button>
                    <Button 
                        variant="contained" 
                        color={this.state.qnum == questions.length - 1? 'secondary' : "primary"} 
                        onClick={() => this.handleClick(1)} 
                        type="button">
                            {this.state.qnum == questions.length - 1? 'Submit All': 'Next'}
                        </Button>
                </div>
                </div>
            
        )
    }

    handleClick(direction){
        if(direction == 1 && this.state.qnum == questions.length - 1){
            if(!window.confirm("Are you sure you want to submit? Press OK to Submit, or press Cancel to go back and edit your responses."))return;
        }
        if(this.state.responses.length <= this.state.qnum + 1){
            this.state.responses.push('');
        }

        // save the response into the responses list
        this.state.responses[this.state.qnum] = document.getElementById('responseBox').value;

        // set the input component's value to that of the next question
        document.getElementById('responseBox').value = this.state.responses[this.state.qnum + direction];

        this.setState({qnum: this.state.qnum + direction, responses: this.state.responses})
    }
}
