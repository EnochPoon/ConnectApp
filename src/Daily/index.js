import React from 'react';
import './Daily.css';
import {
    Button,
    Input,
    TextField,
    FilledInput,
} from '@material-ui/core';

import {recorded_responses, sampleQ, number_of_weeks} from './storage.js';

export default class Daily extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qnum: 0,
            question: 'Sample Question right over here',
            value: "",
            day: 1,
            weekly_responses: new weekly_responses(7),
        }
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event)
    {
        this.setState({
            weekly_responses: this.state.weekly_responses.addResponse(this.state.qnum, this.state.day, this.state.value),
        });
        event.preventDefault();
    }

    changeDay()
    {
        this.setState({
            day: this.state.day++,
        });

        if (this.state.day >= 7) {
            this.setState({day: 0});
            submitWeek();
        }
    }

    submitWeek()
    {
        recorded_responses.addResponse(this.state.weekly_responses);
        number_of_weeks += 1;
        this.state.weekly_responses = new weekly_responses(7);
    }

    render(){
        if(this.state.qnum >= sampleQ.length)return <div>DONE</div>;
        return (
            <div className="wrapper">
                <div className="content">
                    <div className="question">{sampleQ[this.state.qnum]}</div>
                    <FilledInput type="text" multiline={true} rows="5"></FilledInput>
                    <div> 
                        <form className="EntryForm" onSubmit={this.handleSubmit}>
                            <label>
                                <div> New Item:</div>
                                <input  value={this.state.value} onChange={this.handleChange} />
                            </label>
                        <input type="submit" value="Submit" />
                        </form>
                        <Button onClick={() => this.changeDay()}> Next Day </Button>
                        <Button onClick={() => this.submitWeek()}> Submit Week</Button>
                    </div>
                </div>
                <div className="buttons">
                    <Button variant="contained" color="primary" disabled={this.state.qnum == 0} onClick={() => this.setState({qnum: this.state.qnum - 1})} type="button">Back</Button>
                    <Button variant="contained" color="primary" onClick={() => this.setState({qnum: this.state.qnum + 1})} type="button">Next</Button>
                </div>
            </div>
            
        );
    }
}
