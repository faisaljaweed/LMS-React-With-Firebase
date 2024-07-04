import Buttons from "../../components/button";
import Inputs from "../../components/Input";

const SyllabusForm = () =>{
    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1  className="text-2xl text-white font-bold">Syllabus</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>
         
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">Class</label>
                <Inputs type="number" placeholder="Enter your Classes"/>
                <label className="text-[18px] font-semibold">Subject</label>
                <Inputs type="text" placeholder="Enter your Subject"/>
                <label className="text-[18px] font-semibold">Description</label>
                <Inputs type="text" placeholder="Enter your Description"/>
                <label className="text-[18px] font-semibold">Material</label>
                <Inputs type="text" placeholder="Enter your Material"/>
                <label className="text-[18px] font-semibold">Teacher Assign</label>
                <Inputs type="text" placeholder="Enter your Teacher Name"/>
                
                <Buttons btntitle="Submit" onClick={()=>{}} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default SyllabusForm;