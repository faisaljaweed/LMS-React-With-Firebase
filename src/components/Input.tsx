import { Input } from "@mui/material";
import { FC } from "react";

interface InputProps {
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
  }
const Inputs:FC<InputProps> =({type,placeholder,name,value,onChange})=>{
    return(
        <>
        <Input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange}/>
        
        </>
    );
}
export default Inputs;