import React from 'react';
import './Daily.css';
import {
    Button,
    Input,
    TextField,
    FilledInput,
} from '@material-ui/core';

const sampleQ = ['What is one plus one?', 'Calculate the mass of the sun.', 'How are you doing?', 'Did i stress you out?', 'q5', 'q6', 'last']
export default class Daily extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qnum: 0,
            question: 'Sample Question right over here',
        }
    }

    render(){
        if(this.state.qnum >= sampleQ.length)return <div>DONE</div>;
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="question">{sampleQ[this.state.qnum]}</div>
                    <FilledInput type="text" multiline={true} rows="5"></FilledInput>
                    
                    
                </div>
                <div className="buttons">
                    <Button variant="contained" color="primary" disabled={this.state.qnum == 0} onClick={() => this.setState({qnum: this.state.qnum - 1})} type="button">Back</Button>
                    <Button variant="contained" color="primary" onClick={() => this.setState({qnum: this.state.qnum + 1})} type="button">Next</Button>
                </div>
                </div>
            
        )
    }
}
