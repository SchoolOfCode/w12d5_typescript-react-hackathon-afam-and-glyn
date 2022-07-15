import React from 'react';
import InputBox from '../InputBox';
import SubmitButton from '../SubmitButton';
import  {onChangeType, onClickType} from "../App/App"
/*
interface SearchBarProps {
  onClick : onClickType;
  onChange: onChangeType
}
*/

export default function SearchBar({onClick}: onClickType,{onChange}: onChangeType){
return(
    <>
  <InputBox onChange={onChange} />
  <SubmitButton onClick={onClick} />
  </>
)
}