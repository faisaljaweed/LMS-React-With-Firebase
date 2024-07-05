import { useEffect, useState } from "react";
import { deleteData, getData } from "../../firebase/firbaseMethod";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const SubjectList =()=>{
    const [subjects, setSubjetcs] = useState<any[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchStudents = async () => {
          const subjectData = await getData("subjectlist");
          if (subjectData) {
            // Convert object to array and set state
            const studentsArray = Object.keys(subjectData).map(key => ({
              id: key,
              ...subjectData[key]
            }));
            setSubjetcs(studentsArray);
          }
        };
        fetchStudents();
      }, []);


      const handleEdit = (subject: any) => {
        // Pass the student data to the AddandEditStudent component
        navigate("/", { state: subject });
      };

    const handleDelete = async (id: string) => {
        await deleteData(`studentlist/${id}`);
        setSubjetcs(subjects.filter(subject => subject.id !== id));
      };
    return(
        <>
        <h1>SubjectList</h1>
        <table className="flex flex-col">
        {subjects.length > 0 ? (
          subjects.map((subject, index) => (
            <tr key={index} className="flex gap-2 border-black border-2 border mt-2   ">
              <td className="text-[12px] border border-black w-48 text-start p-2">{subject.studentname}</td>
              <td className="text-[12px] border border-black w-48 text-start p-2">{subject.department}</td>
              <td className="text-[12px] border border-black w-20 text-start p-2">{subject.semester}</td>
              <td className="text-[12px] border border-black w-56 text-start p-2">{subject.teacherassign}</td>
              <div>
                <IconButton onClick={() => handleEdit(subject)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(subject.id)}>
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
export default SubjectList;