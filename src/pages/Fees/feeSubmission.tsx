// import { useState } from "react";
// import Inputs from "../../components/Input";
// import Buttons  from "../../components/button";
// import { addData,updateData } from "../../firebase/firbaseMethod";
// import { useNavigate } from "react-router-dom";
// const FeeSubmission =()=>{
//     const randomNumber=()=>{
//      return   (Math.random(  )*10000).toFixed(0);
//     }
//     const [fee,setFee]=useState({
//         name:"",
//         tution:"",
//         amount:"",
//         cash:"",
//         receipt:""
//     })


//     const navigate = useNavigate();

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//       const { name, value } = e.target;
//       setFee((prevStudent) => ({ ...prevStudent, [name]: value }));
//     };
  
//     const handleAdd = async () => {
//       await addData("feevoucher", fee);
//       navigate("/feevoucher");
//     };
  
//     const handleEdit = async () => {
//       // Assuming you have a student ID or key to update
//       const studentId = "some_student_id"; // Replace with actual ID
//       await updateData(`studentlist/${studentId}`, fee);
//       navigate("/studentlist");
//     };

    
//     return(
//         <>
//          <div className="flex justify-around bg-blue-700">
//         <h1 className="text-2xl text-white font-bold">Fee Submission</h1>
//         <Buttons btntitle="Edit" sx={{color:"white",}}></Buttons>
//         </div>

//         <div className="mt-2">
//             <form  className="flex flex-col  m-auto border border-gray-950 border-3 p-6 w-[500px] ">
//             <label className="text-[18px] font-semibold">Students Name</label>
//             <Inputs type="text" name="name" value={fee.name} onChange={handleChange}/>
//             <select className="text-[17px] font-bold pt-4 pb-4" name="tution" value={fee.tution} onChange={handleChange}>
//                 Fee Type
//                 <option  className="text-[14px] font-bold">Tuition</option>
//                 <option  className="text-[14px] font-bold">Transport</option>
//                 <option  className="text-[14px] font-bold">Library</option>
//             </select>
//             <label className="text-[18px] font-semibold">Amount</label>
//             <Inputs type="number" value={fee.amount} onChange={handleChange} name="amount"/>
//             <select className="text-[17px] font-bold pt-4 pb-4" value={fee.cash} name="cash" onChange={handleChange}>
//                 Payment Method
//                 <option  className="text-[14px] font-bold">Cash</option>
//                 <option  className="text-[14px] font-bold">Online</option>
//             </select>
//             <h2 className="text-[18px] font-semibold">Reciept No : {randomNumber()} </h2>
//             <div className="flex flex-row gap-6 mt-4">
//                 <Buttons sx={{}}  btntitle="ADD" onClick={handleAdd} ></Buttons>
//                 <Buttons sx={{}} btntitle="Delete" onClick={()=>{}} ></Buttons>
//                 </div>
//             </form>
//         </div>
        
//         </>
//     );
// }
// export default FeeSubmission;


import { useState, useEffect } from "react";
import Inputs from "../../components/Input";
import Buttons from "../../components/button";
import { addData } from "../../firebase/firbaseMethod";
import { useNavigate } from "react-router-dom";

const FeeSubmission = () => {
  // Generate random receipt number only once when component mounts
  const generateRandomNumber = () => {
    return (Math.random() * 10000).toFixed(0);
  };

  const [receiptNumber] = useState(generateRandomNumber());

  const [fee, setFee] = useState({
    name: "",
    tution: "",
    amount: "",
    cash: "",
    receipt: receiptNumber
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFee((prevFee) => ({ ...prevFee, [name]: value }));
  };

  const handleAdd = async () => {
    await addData("feevoucher", fee);
    navigate("/feevoucher");
  };

//   const handleEdit = async () => {
//     // Assuming you have a student ID or key to update
//     const studentId = "some_student_id"; // Replace with actual ID
//     await updateData(`studentlist/${studentId}`, fee);
//     navigate("/studentlist");
//   };

  useEffect(() => {
    // Update the fee state with the generated receipt number on component mount
    setFee((prevFee) => ({ ...prevFee, receipt: receiptNumber }));
  }, [receiptNumber]);

  return (
    <>
      <div className="flex justify-around bg-blue-700">
        <h1 className="text-2xl text-white font-bold">Fee Submission</h1>
        <Buttons btntitle="Edit" sx={{ color: "white" }}></Buttons>
      </div>

      <div className="mt-2">
        <form className="flex flex-col m-auto border border-gray-950 border-3 p-6 w-[500px]">
          <label className="text-[18px] font-semibold">Student's Name</label>
          <Inputs type="text" name="name" value={fee.name} onChange={handleChange} />
          <label className="text-[18px] font-semibold mt-4">Fee Type</label>
          <select className="text-[17px] font-bold pt-4 pb-4" name="tution" value={fee.tution} onChange={handleChange}>
            <option value="">Select Fee Type</option>
            <option className="text-[14px] font-bold">Tuition</option>
            <option className="text-[14px] font-bold">Transport</option>
            <option className="text-[14px] font-bold">Library</option>
          </select>
          <label className="text-[18px] font-semibold mt-4">Amount</label>
          <Inputs type="number" value={fee.amount} onChange={handleChange} name="amount" />
          <label className="text-[18px] font-semibold mt-4">Payment Method</label>
          <select className="text-[17px] font-bold pt-4 pb-4" value={fee.cash} name="cash" onChange={handleChange}>
            <option value="">Select Payment Method</option>
            <option className="text-[14px] font-bold">Cash</option>
            <option className="text-[14px] font-bold">Online</option>
          </select>
          <h2 className="text-[18px] font-semibold mt-4">Receipt No: {receiptNumber}</h2>
          <div className="flex flex-row gap-6 mt-4">
            <Buttons sx={{}} btntitle="ADD" onClick={handleAdd}></Buttons>
            <Buttons sx={{}} btntitle="Delete" onClick={() => {}}></Buttons>
          </div>
        </form>
      </div>
    </>
  );
};

export default FeeSubmission;
