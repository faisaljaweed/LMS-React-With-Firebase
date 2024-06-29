// import { Button, Inputs } from "@mui/material";
import Inputs from "../../components/Input";
import Buttons from "../../components/button";
const AddandEditTeacher = () =>{
    return(
        <>
       <>
        <div className="flex justify-around">
        <h1 className="text-2xl">Add and Edit Teacher</h1>
        <Buttons btntitle="Edit" ></Buttons>
        </div>
        
        <div >
            <form className="flex flex-col">
                <label>Teacher Name</label>
                <Inputs type="text" placeholder="Enter your Name"/>
                {/* <label>Father Name</label>
                <Inputs type="text" placeholder="Enter Your Father Name "/> */}
                <label>Gender</label>
                <section>
                <Inputs type="radio" name="gender" value="male"/>
                <label>male</label>
                <Inputs type="radio" name="gender" value="female"/>
                <label>Female</label>
                </section>
                <label>Email</label>
                <Inputs type="email" placeholder="Enter your Email"/>
                <label>Adress</label>
                <textarea cols={4} rows={3}></textarea>
                <label>Contact</label>
                <Inputs type="number" placeholder="Enter your Number"/>
                <label>Teaching Subject</label>
                <select>
                    <option>Urdu</option>
                    <option>English</option>
                    <option>Math</option>
                    <option>Islamiat</option>
                    <option>Science</option>
                    <option>Social Studies</option>
                    <option>Dawn News</option>
                    <option>Drawing</option>
                    <option>Computer</option>
                    <option>Sindhi</option>
                </select>
                <Buttons btntitle="Submit" onClick={()=>{}} ></Buttons>
            </form>
        </div>
        </>
        </>
    );
}
export default AddandEditTeacher;