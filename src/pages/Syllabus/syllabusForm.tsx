import { useState } from "react";
import Buttons from "../../components/button";
import Inputs from "../../components/Input";
import { addData } from "../../firebase/firbaseMethod";
import { useNavigate } from "react-router-dom";
const SyllabusForm = () =>{
    const [syllabus,setSyllabus]=useState({
        class:"",
        subject:"",
        description:"",
        material:"",
        teacherAssign:""
    })
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setSyllabus((prevSyllabus) => ({ ...prevSyllabus, [name]: value }));
    };
  
    const handleAdd = async () => {
        await addData("syllabuslist", syllabus);
        navigate("/syllabuslist");
      };
    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1  className="text-2xl text-white font-bold">Syllabus</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>
         
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">Class</label>
                <Inputs name="class" type="number" placeholder="Enter your Classes" value={syllabus.class} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Subject</label>
                <Inputs name="subject" type="text" placeholder="Enter your Subject" value={syllabus.subject} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Description</label>
                <Inputs name="description" type="text" placeholder="Enter your Description" value={syllabus.description} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Material</label>
                <Inputs name="material" type="text" placeholder="Enter your Material" value={syllabus.material} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Teacher Assign</label>
                <Inputs name="teacherAssign" type="text" placeholder="Enter your Teacher Name" value={syllabus.teacherAssign} onChange={handleChange}/>
                <Buttons btntitle="Submit" onClick={handleAdd} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default SyllabusForm;