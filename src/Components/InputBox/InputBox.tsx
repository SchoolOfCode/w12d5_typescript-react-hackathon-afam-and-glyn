import React from 'react';
import  {onChangeType} from "../App/App"

export default function InputBox({onChange}: onChangeType ){
    return(
        <input onChange={onChange}></input>
    )
}