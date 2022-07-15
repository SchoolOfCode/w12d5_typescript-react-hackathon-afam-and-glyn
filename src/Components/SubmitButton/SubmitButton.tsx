import React from 'react';
import  {onClickType} from "../App/App"


export default function SubmitButton({onClick}: onClickType){
    return(
        <button onClick={onClick}>Submit</button>
    )
}

