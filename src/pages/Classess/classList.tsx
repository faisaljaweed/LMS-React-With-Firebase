import { useEffect, useState } from "react";
import { deleteData, getData } from "../../firebase/firbaseMethod";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
const ClassList =()=>{
    const [classes, setClasses] = useState<any[]>([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchStudents = async () => {
        const studentData = await getData("classlist");
        if (studentData) {
          // Convert object to array and set state
          const studentsArray = Object.keys(studentData).map(key => ({
            id: key,
            ...studentData[key]
          }));
          setClasses(studentsArray);
        }
      };
      fetchStudents();
    }, []);
  
    const handleEdit = (student: any) => {
      // Pass the student data to the AddandEditStudent component
      navigate("/", { state: student });
    };
  
    const handleDelete = async (id: string) => {
      await deleteData(`studentlist/${id}`);
      setClasses(classes.filter(classes => classes.id !== id));
    };
    return(
        <>
        <h1>ClassList</h1>
        <table className="flex flex-col">
        {classes.length > 0 ? (
          classes.map((student, index) => (
            <tr key={index} className="flex gap-2 border-black border-2 border mt-2   ">
              <td className="text-[12px] border border-black w-48 text-center p-2">{student.className}</td>
              <td className="text-[12px] border border-black w-48 text-center p-2">{student.classCode}</td>
              <td className="text-[12px] border border-black w-20 text-center p-2">{student.section}</td>
              <td className="text-[12px] border border-black w-56 text-center p-2">{student.roomNumber}</td>
              <td className="text-[12px] border border-black w-20 text-center p-2">{student.teacherAsign}</td>
              {/* <td className="text-[12px] border border-black w-20 text-center p-2">{student.course}</td> */}
              <div>
                <IconButton onClick={() => handleEdit(student)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(student.id)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            </tr>
          ))
        ) : (
          <td>No students available</td>
        )}
        </table>
        </>
    );
}
export default ClassList;