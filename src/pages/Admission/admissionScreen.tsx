import Buttons from "../../components/button";
import Inputs from "../../components/Input";

const AdmissionScreen = ()=>{
    return(
        <>
        <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Addmission Screen</h1>
        <Buttons btntitle="Edit" sx={{color:"white"}}></Buttons>
        </div>
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
            <label className="text-[18px] font-semibold">Student Name</label>
            <Inputs  type="text" placeholder="Enter your Name"/>
            <label className="text-[18px] font-semibold">Date of Birth</label>
            <Inputs  type="date" />
            <section>
                <Inputs type="radio" name="gender" value="male"/>
                <label className="text-[18px] font-semibold pl-4 pr-4">male</label>
                <Inputs type="radio" name="gender" value="female"/>
                <label className="text-[18px] font-semibold pl-4 pr-4">Female</label>
                </section>
                <label className="text-[18px] font-semibold">Garduain Name</label>
                <Inputs  type="text" placeholder="Enter your Garduain Name"/>
                <label className="text-[18px] font-semibold">Contact Number</label>
                <Inputs  type="number" placeholder="Enter your Contact Number"/>
                <label className="text-[18px] font-semibold">Address</label>
                <textarea className="border border-black border-2 p-2" cols={4} rows={3}></textarea>
                <label className="text-[18px] font-semibold">Admission Date</label>
                <Inputs  type="date" />
            </form>
        </div>

        </>
    );
}
export default AdmissionScreen;
