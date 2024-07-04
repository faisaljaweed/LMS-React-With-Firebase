import Buttons from "../../components/button";
import Inputs from "../../components/Input";

const FeeSubmission =()=>{
    return(
        <>
         <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Fee Submission</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>

        <div className="mt-2">
            <form  className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
            <label className="text-[18px] font-semibold">Students Name</label>
            <Inputs/>
            <select className="text-[17px] font-bold pt-4 pb-4">
                Fee Type
                <option  className="text-[14px] font-bold">Tuition</option>
                <option  className="text-[14px] font-bold">Transport</option>
                <option  className="text-[14px] font-bold">Library</option>
            </select>
            <label className="text-[18px] font-semibold">Amount</label>
            <Inputs/>
            <select className="text-[17px] font-bold pt-4 pb-4">
                Payment Method
                <option  className="text-[14px] font-bold">Cash</option>
                <option  className="text-[14px] font-bold">Online</option>
            </select>
            <h2 className="text-[18px] font-semibold">Reciept No </h2>
            <div className="flex flex-row gap-6 mt-4">
                <Buttons sx={{}}  btntitle="ADD" onClick={()=>{}} ></Buttons>
                <Buttons sx={{}} btntitle="Delete" onClick={()=>{}} ></Buttons>
                </div>
            </form>
        </div>
        
        </>
    );
}
export default FeeSubmission;