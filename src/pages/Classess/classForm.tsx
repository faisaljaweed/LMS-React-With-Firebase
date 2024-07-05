import { useState } from "react";
import Buttons from "../../components/button";
import Inputs from "../../components/Input";
import { addData,updateData } from "../../firebase/firbaseMethod";
import { useNavigate } from "react-router-dom";


const ClassForm =()=>{
    const [classes,setClasses]=useState({
    className:"",
    classCode:"",
    section:"",
    roomNumber:"",
    teacherAsign:""
    })


    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setClasses((prevClasses) => ({ ...prevClasses, [name]: value }));
    };
  
    const handleAdd = async () => {
      await addData("classlist", classes);
      navigate("/classlist");
    };
  
    const handleEdit = async () => {
      // Assuming you have a student ID or key to update
      const studentId = "some_student_id"; // Replace with actual ID
      await updateData(`studentlist/${studentId}`, classes);
      navigate("/studentlist");
    };
    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1  className="text-2xl text-white font-bold">ClassForm</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">ClassName </label>
                <Inputs name="className" value={classes.className} onChange={handleChange} type="text" placeholder="Enter your Class Name"/>
                <label className="text-[18px] font-semibold">Class Code</label>
                <Inputs name="classCode" value={classes.classCode} onChange={handleChange} type="number" placeholder="Enter your Class Code"/>
                <label className="text-[18px] font-semibold">Section</label>
                <Inputs name="section" value={classes.section} onChange={handleChange} type="text" placeholder="Enter your Section"/>
                <label className="text-[18px] font-semibold">Room Number</label>
                <Inputs name="roomNumber" value={classes.roomNumber} onChange={handleChange} type="number" placeholder="Enter your Room Number"/>
                <label className="text-[18px] font-semibold">Teacher Assign</label>
                <Inputs name="teacherAsign" value={classes.teacherAsign} onChange={handleChange} type="text" placeholder="Enter your Teacher Name"/>
                
                <Buttons btntitle="Submit" onClick={handleAdd} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default ClassForm;