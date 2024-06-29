import Inputs from "../../components/Input";
import Buttons  from "../../components/button";

const AddandEditStudent = ()=>{
    return (
        <>
        <div className="flex justify-around">
        <h1 className="text-2xl">Add and Edit Students</h1>
        <Buttons btntitle="Edit"></Buttons>
        </div>
        
        <div >
            <form className="flex flex-col">
                <label>Student Name</label>
                <Inputs type="text" placeholder="Enter your Name"/>
                <label>Father Name</label>
                <Inputs  placeholder="Enter Your Father Name "/>
                <label>Gender</label>
                <section>
                <input type="radio" name="gender" value="male"/>
                <label>male</label>
                <input type="radio" name="gender" value="female"/>
                <label>Female</label>
                </section>
                <label>Email</label>
                <Inputs type="email" placeholder="Enter your Email"/>
                <label>Adress</label>
                <textarea cols={4} rows={3}></textarea>
                <label>Contact</label>
                <Inputs type="number" placeholder="Enter your Number"/>
                <label>Course</label>
                <select>
                    <option>Class 1</option>
                    <option>Class 2</option>
                    <option>Class 3</option>
                    <option>Class 4</option>
                    <option>Class 5</option>
                    <option>Class 6</option>
                    <option>Class 7</option>
                    <option>Class 8</option>
                    <option>Class 9</option>
                    <option>Class 10</option>
                </select>
                <Buttons sx={{backgroundColor:"red", width:"30px",color:"white"}} btntitle="ADD" onClick={()=>{}} ></Buttons>
                <Buttons sx={{backgroundColor:"blue", width:"30px",color:"white"}} btntitle="Delete" onClick={()=>{}} ></Buttons>
            </form>
        </div>
        </>
    );
}
export default AddandEditStudent;