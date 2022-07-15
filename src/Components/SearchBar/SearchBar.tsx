import React from 'react';
import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton';
import  {onClickType} from "../App/App"

export default function SearchBar({onClick}: onClickType){
return(
    <>
  <InputBox></InputBox> 
  <SubmitButton onClick={onClick}/>
  </>
)
}