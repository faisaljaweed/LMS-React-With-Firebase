
import { useEffect, useState } from "react";
import { deleteData, getData } from "../../firebase/firbaseMethod";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from "react-router-dom";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  interface ModalScreenProps {
    open: boolean;
    handleClose: () => void;
  }


const FeeVoucher = () => {
  const [voucher, setVoucher] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      const studentData = await getData("feevoucher");
      if (studentData) {
        // Convert object to array and set state
        const studentsArray = Object.keys(studentData).map(key => ({
          id: key,
          ...studentData[key]
        }));
        setVoucher(studentsArray);
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
    setVoucher(voucher.filter(student => student.id !== id));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <h1>Fee Voucher</h1>
      <table className="flex flex-col">
        {voucher.length > 0 ? (
          voucher.map((student, index) => (
            <tr key={index} className="flex gap-2 border-black border-2 border mt-2">
              <td className="text-[12px] border border-black w-48 text-center p-2">{student.name}</td>
              <td className="text-[12px] border border-black w-48 text-center p-2">{student.amount}</td>
              <td className="text-[12px] border border-black w-20 text-center p-2">{student.tution}</td>
              <td className="text-[12px] border border-black w-56 text-center p-2">{student.cash}</td>
              <td className="text-[12px] border border-black w-20 text-center p-2">{student.receipt}</td>
              <div>
                <IconButton onClick={() => handleEdit(student)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(student.id)}>
                  <DeleteIcon />
                </IconButton>
                <IconButton onClick={handleOpen}>
                  <VisibilityIcon />
                </IconButton>
              </div>
            </tr>
          ))
        ) : (
          <td>No students available</td>
        )}
      </table>
      <ModalScreen open={open} handleClose={handleClose} />
    </>
  );
};

export default FeeVoucher;


const ModalScreen = ({ open, handleClose }: ModalScreenProps) => {
    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };