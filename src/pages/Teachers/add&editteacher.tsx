// import { Button, Inputs } from "@mui/material";
import Inputs from "../../components/Input";
import Buttons from "../../components/button";
const AddandEditTeacher = () =>{
    return(
        <>
       <>
        <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Add and Edit Teacher</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>
        
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">Teacher Name</label>
                <Inputs type="text" placeholder="Enter your Name"/>
                <label className="text-[18px] font-semibold">Gender</label>
                <section>
                <Inputs type="radio" name="gender" value="male"/>
                <label className="text-[18px] font-semibold pl-4 pr-4">male</label>
                <Inputs type="radio" name="gender" value="female"/>
                <label className="text-[18px] font-semibold pl-4 pr-4">Female</label>
                </section>
                <label className="text-[18px] font-semibold">Email</label>
                <Inputs type="email" placeholder="Enter your Email"/>
                <label className="text-[18px] font-semibold">Adress</label>
                <textarea className="border border-black border-2 p-2" cols={4} rows={3}></textarea>
                <label className="text-[18px] font-semibold">Contact</label>
                <Inputs type="number" placeholder="Enter your Number"/>
                <label className="text-[18px] font-semibold">Teaching Subject</label>
                <select className="text-[17px] font-bold">
                    <option className="text-[14px] font-bold">Urdu</option>
                    <option className="text-[14px] font-bold">English</option>
                    <option className="text-[14px] font-bold">Math</option>
                    <option className="text-[14px] font-bold">Islamiat</option>
                    <option className="text-[14px] font-bold">Science</option>
                    <option className="text-[14px] font-bold">Social Studies</option>
                    <option className="text-[14px] font-bold">Dawn News</option>
                    <option className="text-[14px] font-bold">Drawing</option>
                    <option className="text-[14px] font-bold">Computer</option>
                    <option className="text-[14px] font-bold">Sindhi</option>
                </select>
                <Buttons btntitle="Submit" onClick={()=>{}} ></Buttons>
            </form>
        </div>
        </>
        </>
    );
}
export default AddandEditTeacher;