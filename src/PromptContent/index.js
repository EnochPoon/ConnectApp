import React from 'react';
import './PromptContent.css';
import {
    Button,
    Input,
    TextField,
    FilledInput,
} from '@material-ui/core';
import {handleResponseList} from './../storage.js'
const TOTAL_Q = 7;
const sampleQ = ['What are your greatest accomplishments this week?',
                 'How are you doing?', 
                 'Did i stress you out?', 'What is this question?', 'Is this a lie?', 'Do you like pie', 'Is this the end?']

export default class PromptContent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qnum: 0,
            responses: [''],
        }
    }

    getAllResponses(){
        let responseList = sampleQ.slice();
        for(let i = 0; i < TOTAL_Q; i++){
            responseList[i] = {
                question: responseList[i], 
                answer: this.state.responses[i]
            }
        }
        return responseList;
    }

    render(){
        if(this.state.qnum >= sampleQ.length){
            let responseList = this.getAllResponses();

            for(let i = 0; i < TOTAL_Q; i++){
                responseList[i] = <li><b>{responseList[i].question + " "}</b> {responseList[i].answer}</li>
            }
            return (
                <div>
                    <h2>DONE</h2>
                    <ul>
                    {responseList}
                    </ul>
                    
                </div>)
        }

        return (
            <div className="wrapper">
                <div className="content">
                    <div className="question">{sampleQ[this.state.qnum]}</div>
                    <FilledInput 
                        type="text"
                        multiline={true}
                        rows="5"
                        id="responseBox"
                        label="Your Answer"
                        ></FilledInput>
                </div>
                <div className="buttons">
                    <Button variant="contained" color="primary" disabled={this.state.qnum == 0} onClick={() => this.handleClick(-1)} type="button">Back</Button>
                    <Button variant="contained" color="primary" onClick={() => this.handleClick(1)} type="button">Next</Button>
                </div>
                </div>
            
        )
    }

    handleClick(direction){
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
