import { FC } from "react";
import { Button } from "@mui/material";
interface ButtonProps{
    btntitle:string;
    onClick?:()=>void;
    sx?:any;
}
const Buttons:FC<ButtonProps> =({btntitle,onClick,sx}) =>{
    return(
        <>
        <Button onClick={onClick} sx={sx}>{btntitle}</Button>
        </>
    );
}
export default Buttons;