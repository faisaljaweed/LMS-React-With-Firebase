import { deleteData, getData } from "../../firebase/firbaseMethod";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const SyllabusList = () =>{
    const [syllabuss, setSyllabuss] = useState<any[]>([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchStudents = async () => {
        const syllabusData = await getData("syllabuslist");
        if (syllabusData) {
          // Convert object to array and set state
          const syllabusArray = Object.keys(syllabusData).map(key => ({
            id: key,
            ...syllabusData[key]
          }));
          setSyllabuss(syllabusArray);
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
      setSyllabuss(syllabuss.filter(syllabus => syllabus.id !== id));
    };
    return(
        <>
        <h1>
        SyllabusList
        </h1>
        <table className="flex flex-col">
        {syllabuss.length > 0 ? (
          syllabuss.map((syllabus, index) => (
            <tr key={index} className="flex gap-2 border-black border-2 border mt-2   ">
              <td className="text-[12px] border border-black w-11 text-center p-2">{syllabus.class}</td>
              <td className="text-[12px] border border-black w-28 text-center p-2">{syllabus.subject}</td>
              <td className="text-[12px] border border-black w-56 text-center p-2">{syllabus.description}</td>
              <td className="text-[12px] border border-black w-56 text-center p-2">{syllabus.material}</td>
              <td className="text-[12px] border border-black w-20 text-center p-2">{syllabus.teacherAssign}</td>
              <div>
                <IconButton onClick={() => handleEdit(syllabus)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(syllabus.id)}>
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
export default SyllabusList;