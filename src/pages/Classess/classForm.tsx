import Buttons from "../../components/button";
import Inputs from "../../components/Input";

const ClassForm =()=>{
    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1  className="text-2xl text-white font-bold">ClassForm</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">ClassName </label>
                <Inputs type="text" placeholder="Enter your Class Name"/>
                <label className="text-[18px] font-semibold">Class Code</label>
                <Inputs type="number" placeholder="Enter your Class Code"/>
                <label className="text-[18px] font-semibold">Section</label>
                <Inputs type="text" placeholder="Enter your Section"/>
                <label className="text-[18px] font-semibold">Room Number</label>
                <Inputs type="number" placeholder="Enter your Room Number"/>
                <label className="text-[18px] font-semibold">Teacher Assign</label>
                <Inputs type="text" placeholder="Enter your Teacher Name"/>
                
                <Buttons btntitle="Submit" onClick={()=>{}} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default ClassForm;