import { useState } from "react";
import Inputs from "../../components/Input";
import Buttons  from "../../components/button";
import { addData,updateData } from "../../firebase/firbaseMethod";
import { useNavigate } from "react-router-dom";
const AddandEditStudent = ()=>{
    const [student,setStudent]=useState({
        name:"",
        fname:"",
        gender:"",
        email:"",
        address:"",
        contact:"",
        course:"",
    })


    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
    };
  
    const handleAdd = async () => {
      await addData("studentlist", student);
      navigate("/studentlist");
    };
  
    const handleEdit = async () => {
      // Assuming you have a student ID or key to update
      const studentId = "some_student_id"; // Replace with actual ID
      await updateData(`studentlist/${studentId}`, student);
      navigate("/studentlist");
    };
    return (
        <>
        <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Add and Edit Students</h1>
        <Buttons btntitle="Edit" onClick={handleEdit} sx={{color:"white",}}></Buttons>
        </div>



        
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">Student Name</label>
                <Inputs name="name" type="text" placeholder="Enter your Name" value={student.name} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Father Name</label>
                <Inputs name="fname" placeholder="Enter Your Father Name" value={student.fname} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Gender</label>
                <section>
                <Inputs type="radio" name="gender" value="male" checked={student.gender === "male"} onChange={handleChange}/>
                <label className="text-[18px] font-semibold pl-4 pr-4">male</label>
                <Inputs type="radio" name="gender" value="female" checked={student.gender === "female"} onChange={handleChange} />
                <label className="text-[18px] font-semibold pl-4 pr-4">Female</label>
                </section>
                <label className="text-[18px] font-semibold">Email</label>
                <Inputs name="email" type="email" placeholder="Enter your Email " value={student.email} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Adress</label>
                <textarea name="address" className="border border-black border-2 p-2" cols={4} rows={3} value={student.address} onChange={handleChange}></textarea>
                <label className="text-[18px] font-semibold">Contact</label>
                <Inputs type="number" name="contact" placeholder="Enter your Number" value={student.contact} onChange={handleChange}/>
                <label className="text-[18px] font-semibold">Course</label>
                <select name="course"  value={student.course} onChange={handleChange} className="text-[17px] font-bold">
                    <option value="">Select Course</option>
                    <option className="text-[14px] font-bold" value="Class 1">Class 1</option>
                    <option className="text-[14px] font-bold" value="Class 2">Class 2</option>
                    <option className="text-[14px] font-bold" value="Class 3">Class 3</option>
                    <option className="text-[14px] font-bold" value="Class 4">Class 4</option>
                    <option className="text-[14px] font-bold" value="Class 5">Class 5</option>
                    <option className="text-[14px] font-bold" value="Class 6">Class 6</option>
                    <option className="text-[14px] font-bold" value="Class 7">Class 7</option>
                    <option className="text-[14px] font-bold" value="Class 8">Class 8</option>
                    <option className="text-[14px] font-bold" value="Class 9">Class 9</option>
                    <option className="text-[14px] font-bold" value="Class 10">Class 10</option>
                </select> 
                <div className="flex flex-row gap-6 mt-4">
                <Buttons sx={{}} onClick={handleAdd}  btntitle="ADD"  ></Buttons>
                <Buttons sx={{}} btntitle="Delete" onClick={()=>{}} ></Buttons>
                </div>
            </form>
        </div>
        </>
    );
}
export default AddandEditStudent;