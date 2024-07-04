import Buttons from "../../components/button";
import Inputs from "../../components/Input";

const Registration =()=>{
    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Registration</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>

        <div className="mt-2">
            <form  className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
            <label className="text-[18px] font-semibold">School Name</label>
            <Inputs type="text" placeholder="Enter Your School Name "/>
            <label className="text-[18px] font-semibold">Principal Name</label>
            <Inputs type="text" placeholder="Enter Your Principal Name "/>
            <label className="text-[18px] font-semibold">School Address</label>
            <Inputs type="text" placeholder="School Address "/>
            <label className="text-[18px] font-semibold">Contact Number</label>
            <Inputs type="number" placeholder="Enter Your Contact Number "/>
            <label className="text-[18px] font-semibold">Email</label>
            <Inputs type="email" placeholder="Enter Your Email "/>


            <label className="text-[18px] font-semibold">Number of Student</label>
            <Inputs type="number" placeholder="Enter Your Number of Student "/>
            <label className="text-[18px] font-semibold">Number of Teacher</label>
            <Inputs type="number" placeholder="Enter Your Number of Teacher"/>
            <label className="text-[18px] font-semibold">Establishment Year</label>
            <Inputs type="numbers" placeholder="Enter Your Establishment Year "/>

            </form>
        </div>
        </>
    );
}
export default Registration;