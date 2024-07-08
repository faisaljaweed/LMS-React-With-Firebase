// import { Button, Inputs } from "@mui/material";
import { useState } from "react";
import Inputs from "../../components/Input";
import Buttons from "../../components/button";
import { addData,updateData } from "../../firebase/firbaseMethod";
import { useNavigate } from "react-router-dom";
const AddandEditTeacher = () =>{

    const [teacher,setTeacher]=useState({
        name:"",
        gender:"",
        email:"",
        address:"",
        contact:"",
        subject:"",
    })


    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setTeacher((prevStudent) => ({ ...prevStudent, [name]: value }));
    };
  
    const handleAdd = async () => {
      await addData("teacherlist", teacher);
      navigate("/teacherlist");
    };
  
    const handleEdit = async () => {
      // Assuming you have a student ID or key to update
      const studentId = "some_student_id"; // Replace with actual ID
      await updateData(`studentlist/${studentId}`, teacher);
      navigate("/studentlist");
    };
    return(
        <>
       <>
        <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Add and Edit Teacher</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}} onClick={handleEdit}></Buttons>
        </div>
        
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold " >Teacher Name</label>
                <Inputs name="name" type="text" placeholder="Enter your Name" value={teacher.name} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Gender</label>
                <section>
                <Inputs type="radio" name="gender" value="male"  checked={teacher.gender === "male"} onChange={handleChange}/>
                <label className="text-[18px] font-semibold pl-4 pr-4">male</label>
                <Inputs type="radio" name="gender" value="female"  checked={teacher.gender === "female"} onChange={handleChange}/>
                <label className="text-[18px] font-semibold pl-4 pr-4">Female</label>
                </section>
                <label className="text-[18px] font-semibold">Email</label>
                <Inputs name="email" type="email" placeholder="Enter your Email" value={teacher.email} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Adress</label>
                <textarea name="address" className="border border-black border-2 p-2" cols={4} rows={3} value={teacher.address} onChange={handleChange}></textarea>
                <label className="text-[18px] font-semibold">Contact</label>
                <Inputs name="contact" type="number" placeholder="Enter your Number" value={teacher.contact} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Teaching Subject</label>
                <select name="subject" className="text-[17px] font-bold" value={teacher.subject} onChange={handleChange}>
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
                <Buttons btntitle="Submit" onClick={handleAdd} ></Buttons>
            </form>
        </div>
        </>
        </>
    );
}
export default AddandEditTeacher;