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
    student?: any;
}

const FeeVoucher = () => {
    const [voucher, setVoucher] = useState<any[]>([]);
    const [open, setOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<any>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStudents = async () => {
            const studentData = await getData("feevoucher");
            if (studentData) {
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
        navigate("/", { state: student });
    };

    const handleDelete = async (id: string) => {
        await deleteData(`studentlist/${id}`);
        setVoucher(voucher.filter(student => student.id !== id));
    };

    const handleView = (student: any) => {
        setSelectedStudent(student);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedStudent(null);
    };

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
                                <IconButton onClick={() => handleView(student)}>
                                    <VisibilityIcon />
                                </IconButton>
                            </div>
                        </tr>
                    ))
                ) : (
                    <td>No students available</td>
                )}
            </table>
            <ModalScreen open={open} handleClose={handleClose} student={selectedStudent} />
        </>
    );
};

export default FeeVoucher;

const ModalScreen = ({ open, handleClose, student }: ModalScreenProps) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center" , fontWeight:"bold"}}>
                    Fee Voucher Details
                </Typography>
                {student ? (
                    <>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong>Name:</strong> {student.name}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong>ID:</strong> {student.id}
                        </Typography>
                        {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong>Roll No:</strong> {student.receiptNumber}
                        </Typography> */}
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong>Fees Type:</strong> {student.tution}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong> Fees Types:</strong> {student.cash}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <strong>Total Fees: Rs :</strong> {student.amount}
                        </Typography>
                    </>
                ) : (
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        No student data available.
                    </Typography>
                )}
            </Box>
        </Modal>
    );
};
