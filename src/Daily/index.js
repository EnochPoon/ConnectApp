import React from 'react';
import {
    Button
} from '@material-ui/core';


export default class Daily extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style={{alignItems: 'center', flexDirection: 'column'}}>
            <Button variant="contained" color="secondary" onClick={() => this.handleClick()} >
                Start Journey
            </Button>
            </div>
            
        )
    }

    handleClick = () => {

    }
}