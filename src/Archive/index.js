import React from 'react';
import {
    LinearProgress
} from '@material-ui/core'

import {totalList, totalListLength} from '../storage.js' 

export default class Archive extends React.Component{

    render(){
        for (let j = 0; j < totalListLength; j++)
        {
            for(let i = 0; i < totalList[j].length; i++){
                totalList[j][i] = <li><b>{totalList[j][i].question + " "}</b> {totalList[j][i].answer}</li>
            }
            totalList[j] = <ul>{totalList[j]}</ul>
        }        


        return (
            <div className="wrapper">
                
                
                <ul>
                {totalList}
                </ul>
                
            </div>)
        


    }
}