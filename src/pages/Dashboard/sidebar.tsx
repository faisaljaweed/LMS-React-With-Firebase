// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import logos from "../../../images/logo.png";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        <div className="flex justify-center items-center">
          <img src={logos} className="w-24 h-24" />
        </div>
        <SimpleTreeView>
          <TreeItem itemId="student" label="Students">
            <Link to={""}>
              {" "}
              <TreeItem
                itemId="student-add-edit"
                label="Student Add/Edit Screen"
              />
            </Link>
            <Link to={"studentlist"}>
              {" "}
              <TreeItem itemId="student-list" label="Student List Screen" />
            </Link>
            <Link to={"transferstudent"}>
              {" "}
              <TreeItem
                itemId="transfer-student-screen"
                label="Transfer Student Screen"
              />
            </Link>
          </TreeItem>
          <TreeItem itemId="teacher" label="Teacher">
            <Link to={"addandEeditteacher"}>
              {" "}
              <TreeItem
                itemId="teacher-add-edit"
                label="Teacher Add/Edit Screen"
              />
            </Link>
            <Link to={"teacherlist"}>
              {" "}
              <TreeItem itemId="teacher-list" label="Teacher List Screen" />
            </Link>
            <Link to={"teacherallocation"}>
              {" "}
              <TreeItem
                itemId="teacher-allocation-screen"
                label="Teacher Allocation Screen"
              />
            </Link>
          </TreeItem>
          <TreeItem itemId="subject" label="Subjects">
            <Link to={"addandeditsubject"}>
              {" "}
              <TreeItem
                itemId="subject-add-edit"
                label="Subject Add/Edit Screen"
              />
            </Link>
            <Link to={"subjectlist"}>
              {" "}
              <TreeItem itemId="subject-list" label="Subject List Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId="school" label="School">
            <Link to={"registration"}>
              {" "}
              <TreeItem itemId="registration" label="Registration" />
            </Link>
          </TreeItem>
          <TreeItem itemId="syllabus" label="Syllabus">
            <Link to={"syllabusform"}>
              {" "}
              <TreeItem itemId="syllabus-form" label="Syllabus Form" />
            </Link>
            <Link to={"syllabuslist"}>
              {" "}
              <TreeItem itemId="syllabus-screen" label="Syllabus List Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId="class" label="Class">
            <Link to={"classform"}>
              {" "}
              <TreeItem itemId="class-form-screen" label="Class Form Screen" />
            </Link>
            <Link to={"classlist"}>
              {" "}
              <TreeItem itemId="class-list-screen" label="Class List Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId="fee" label="Fee">
            <Link to={"feestructure"}>
              {" "}
              <TreeItem
                itemId="fee-structure-screen"
                label="Fee Structure Screen"
              />
            </Link>
            <Link to={"feesubmission"}>
              {" "}
              <TreeItem
                itemId="fee-submission-screen"
                label="Fee Submission Screen"
              />
            </Link>
            <Link to={"feevoucher"}>
              {" "}
              <TreeItem
                itemId="fee-voucher-screen"
                label="Fee Voucher Screen"
              />
            </Link>
          </TreeItem>
          <TreeItem itemId="admission" label="Admission">
            <Link to={"admissionscreen"}>
              {" "}
              <TreeItem itemId="adission-screen" label="Admission Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId="exam" label="Exam">
            <Link to={"examschedule"}>
              {" "}
              <TreeItem
                itemId="exam-schedule-screen"
                label="Exam-Schedule-Screen"
              />
            </Link>
            <Link to={"examresult"}>
              {" "}
              <TreeItem
                itemId="exam-result-screen"
                label="Exam-Result-Screen"
              />
            </Link>
          </TreeItem>
        </SimpleTreeView>
      </Box>
    </>
  );
};
export default Sidebar;
