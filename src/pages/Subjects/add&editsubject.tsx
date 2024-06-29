import Inputs from "../../components/Input";
import Buttons from "../../components/button";

const AddandEditSubject = () =>{
    return(
        <>
        <div className="flex justify-around">
        <h1 className="text-2xl">Add and Edit Student</h1>
        <Buttons btntitle="Edit" ></Buttons>
        </div>
        
        <div >
            <form className="flex flex-col">
                <label>Student</label>
                <Inputs type="text" placeholder="Enter your Subject"/>
                <label>Department</label>
                <Inputs type="text" placeholder="Enter your Department"/>
                <label>Semester</label>
                <Inputs type="text" placeholder="Enter your Semester"/>
                <label>Teacher Assign</label>
                <Inputs type="text" placeholder="Enter your Teacher Name"/>
                
                <Buttons btntitle="Submit" onClick={()=>{}} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default AddandEditSubject;