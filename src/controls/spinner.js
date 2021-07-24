import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core";


function Spinner(props) {
    const {className, ...other } = props;


    return (
        <>
           <CircularProgress
              style={{   color: 'primary',
              marginLeft: '10px',
              width: '60px',
              height: '60px',}}
           /> 
        </>
    )
}

export default Spinner
