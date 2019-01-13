import React from 'react';
import {recorded_responses, sampleQ, number_of_weeks} from '../storage.js';

export default class Archive extends React.Component{

    constructor(props)
    {
        super(props);
    }
    render(){
        const responseList = recorded_responses.map((value, index) => {
            return(
                <li key = {index}>
                    <div>
                        {sampleQ[0]} + {value.returnResponses(0)} + "\n" +
                        {sampleQ[1]} + {value.returnResponses(1)} + "\n" +
                        {sampleQ[2]} + {value.returnResponses(2)} + "\n" +
                        {sampleQ[3]} + {value.returnResponses(3)} + "\n" +
                        {sampleQ[4]} + {value.returnResponses(4)} + "\n" + 
                        {sampleQ[5]} + {value.returnResponses(5)} + "\n" + 
                        {sampleQ[6]} + {value.returnResponses(6)}
                    </div>
                </ li>
            );
        }); 

        return (
            <div className="mainContent">
                Archive. Fill in stuff here.
                <ul>
                    {responseList}
                </ul>
            </div>
        );
    }
}