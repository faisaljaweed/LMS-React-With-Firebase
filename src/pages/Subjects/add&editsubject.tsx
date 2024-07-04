import Inputs from "../../components/Input";
import Buttons from "../../components/button";

const AddandEditSubject = () =>{
    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1  className="text-2xl text-white font-bold">Add and Edit Student</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>
        
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">Student</label>
                <Inputs type="text" placeholder="Enter your Subject"/>
                <label className="text-[18px] font-semibold">Department</label>
                <Inputs type="text" placeholder="Enter your Department"/>
                <label className="text-[18px] font-semibold">Semester</label>
                <Inputs type="text" placeholder="Enter your Semester"/>
                <label className="text-[18px] font-semibold">Teacher Assign</label>
                <Inputs type="text" placeholder="Enter your Teacher Name"/>
                
                <Buttons btntitle="Submit" onClick={()=>{}} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default AddandEditSubject;