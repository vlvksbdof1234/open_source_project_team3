import React, {Component} from 'react';
import Highlight from 'react-highlight';

export default function code_highlighter(props)
{

    console.log(props.lang);
    console.log(props.code);
    
    return (
       <Highlight className={props.lang}>
        {`${props.code}`}
        </Highlight>
    );

};