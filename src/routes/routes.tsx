import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/NotFount";
import Root from "../pages/root";
import AddandEditStudent from "../pages/Students/add&editStudents";
import StudentListScreen from "../pages/Students/studentlist";
import TransferStudentScreen from "../pages/Students/transferstudent";
import AddandEditTeacher from "../pages/Teachers/add&editteacher";
import TeacherAllocation from "../pages/Teachers/teachcerAllocation";
import TeacherList from "../pages/Teachers/teacherList";
import AddandEditSubject from "../pages/Subjects/add&editsubject";
import SubjectList from "../pages/Subjects/subjectList";
import Registration from "../pages/School/registration";
import SyllabusForm from "../pages/Syllabus/syllabusForm";
import SyllabusList from "../pages/Syllabus/syllabusList";
import ClassForm from "../pages/Classess/classForm";
import ClassList from "../pages/Classess/classList";
import FeeSubmission from "../pages/Fees/feeSubmission";
import FeeVoucher from "../pages/Fees/feeVoucher";
import FeeStructure from "../pages/Fees/feeStructure";
import AdmissionScreen from "../pages/Admission/admissionScreen";
import ExamResult from "../pages/Exam/examResults";
import ExamSchedule from "../pages/Exam/examschedule";

const Approuter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <AddandEditStudent />,
          errorElement: <ErrorPage />,
        },
        {
          path: "studentlist",
          element: <StudentListScreen />,
          errorElement: <ErrorPage />,
        },
        {
          path: "transferstudent",
          element: <TransferStudentScreen />,
          errorElement: <ErrorPage />,
        },
        {
          path: "addandEeditteacher",
          element: <AddandEditTeacher />,
          errorElement: <ErrorPage />,
        },
        {
          path: "teacherallocation",
          element: <TeacherAllocation />,
          errorElement: <ErrorPage />,
        },
        {
          path: "teacherlist",
          element: <TeacherList />,
          errorElement: <ErrorPage />,
        },
        {
          path: "addandeditsubject",
          element: <AddandEditSubject />,
          errorElement: <ErrorPage />,
        },
        {
          path: "subjectlist",
          element: <SubjectList />,
          errorElement: <ErrorPage />,
        },
        {
          path: "registration",
          element: <Registration />,
          errorElement: <ErrorPage />,
        },
        {
          path: "syllabusform",
          element: <SyllabusForm />,
          errorElement: <ErrorPage />,
        },
        {
          path: "syllabuslist",
          element: <SyllabusList />,
          errorElement: <ErrorPage />,
        },
        {
          path: "classform",
          element: <ClassForm />,
          errorElement: <ErrorPage />,
        },
        {
          path: "classlist",
          element: <ClassList />,
          errorElement: <ErrorPage />,
        },
        {
          path: "feesubmission",
          element: <FeeSubmission />,
          errorElement: <ErrorPage />,
        },
        {
          path: "feevoucher",
          element: <FeeVoucher />,
          errorElement: <ErrorPage />,
        },
        {
          path: "feestructure",
          element: <FeeStructure />,
          errorElement: <ErrorPage />,
        },
        {
          path: "admissionscreen",
          element: <AdmissionScreen />,
          errorElement: <ErrorPage />,
        },
        {
          path: "examresult",
          element: <ExamResult />,
          errorElement: <ErrorPage />,
        },
        {
          path: "examschedule",
          element: <ExamSchedule />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename: "/LMS-React-With-Firebase",
  }
);
export default Approuter;
