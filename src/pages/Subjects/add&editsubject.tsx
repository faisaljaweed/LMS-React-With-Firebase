import { useState } from "react";
import Inputs from "../../components/Input";
import Buttons from "../../components/button";
import { addData } from "../../firebase/firbaseMethod";
import { useNavigate } from "react-router-dom";
const AddandEditSubject = () =>{
    const [subject,setSubject]=useState({
        studentname:"",
        department:"",
        semester:"",
        teacherassign:""
    })

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setSubject((prevSubject) => ({ ...prevSubject, [name]: value }));
    };
  
    const handleAdd = async () => {
      await addData("subjectlist", subject);
      navigate("/subjectlist");
    };

    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1  className="text-2xl text-white font-bold">Add and Edit Student</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>
        
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">Student</label>
                <Inputs name="studentname" type="text" placeholder="Enter your Subject" value={subject.studentname} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Department</label>
                <Inputs name="department" type="text" placeholder="Enter your Department" value={subject.department} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Semester</label>
                <Inputs name="semester" type="text" placeholder="Enter your Semester" value={subject.semester} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Teacher Assign</label>
                <Inputs name="teacherassign" type="text" placeholder="Enter your Teacher Name" value={subject.teacherassign} onChange={handleChange}/>
                
                <Buttons btntitle="Submit" onClick={handleAdd} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default AddandEditSubject;