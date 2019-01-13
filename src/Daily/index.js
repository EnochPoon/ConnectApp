import React from 'react';
import './Daily.css';

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
                    <input type="text">
                    </input>
                </div>
                <div className="buttons">
                    <button disabled={this.state.qnum == 0} onClick={() => this.setState({qnum: this.state.qnum - 1})} type="button">Back</button>
                    <button onClick={() => this.setState({qnum: this.state.qnum + 1})} type="button">Next</button>
                </div>
                </div>
            
        )
    }
}
