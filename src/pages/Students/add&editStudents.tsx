import Inputs from "../../components/Input";
import Buttons  from "../../components/button";

const AddandEditStudent = ()=>{
    return (
        <>
        <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Add and Edit Students</h1>
        <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
        </div>



        
        <div className="mt-2">
            <form className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
                <label className="text-[18px] font-semibold">Student Name</label>
                <Inputs  type="text" placeholder="Enter your Name"/>
                <label className="text-[18px] font-semibold">Father Name</label>
                <Inputs  placeholder="Enter Your Father Name "/>
                <label className="text-[18px] font-semibold">Gender</label>
                <section>
                <Inputs type="radio" name="gender" value="male"/>
                <label className="text-[18px] font-semibold pl-4 pr-4">male</label>
                <Inputs type="radio" name="gender" value="female"/>
                <label className="text-[18px] font-semibold pl-4 pr-4">Female</label>
                </section>
                <label className="text-[18px] font-semibold">Email</label>
                <Inputs type="email" placeholder="Enter your Email"/>
                <label className="text-[18px] font-semibold">Adress</label>
                <textarea className="border border-black border-2 p-2" cols={4} rows={3}></textarea>
                <label className="text-[18px] font-semibold">Contact</label>
                <Inputs type="number" placeholder="Enter your Number"/>
                <label className="text-[18px] font-semibold">Course</label>
                <select className="text-[17px] font-bold">
                    <option className="text-[14px] font-bold">Class 1</option>
                    <option className="text-[14px] font-bold">Class 2</option>
                    <option className="text-[14px] font-bold">Class 3</option>
                    <option className="text-[14px] font-bold">Class 4</option>
                    <option className="text-[14px] font-bold">Class 5</option>
                    <option className="text-[14px] font-bold">Class 6</option>
                    <option className="text-[14px] font-bold">Class 7</option>
                    <option className="text-[14px] font-bold">Class 8</option>
                    <option className="text-[14px] font-bold">Class 9</option>
                    <option className="text-[14px] font-bold">Class 10</option>
                </select>
                <div className="flex flex-row gap-6 mt-4">
                <Buttons sx={{}}  btntitle="ADD" onClick={()=>{}} ></Buttons>
                <Buttons sx={{}} btntitle="Delete" onClick={()=>{}} ></Buttons>
                </div>
            </form>
        </div>
        </>
    );
}
export default AddandEditStudent;