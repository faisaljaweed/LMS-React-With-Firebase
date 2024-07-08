// import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import logos from "../../../images/logo.png";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const randomId=()=>{
 let id =   Math.random().toString().slice(2);
    return id;
  }
  return (
    <>
      <Box sx={{ minHeight: 352, minWidth: 250,}}>
        <div className="flex justify-center items-center">
          <img src={logos} className="w-24 h-24" />
        </div>
        <SimpleTreeView >
          <TreeItem itemId={randomId()} label="Students" sx={{fontSize:"20px",color:"red", fontWeight:"bold"}}>
            <Link to={""}>
              {" "}
              <TreeItem
              sx={{fontSize:"20px",color:"Green", fontWeight:"bold"}}
                itemId={randomId()}
                label="Student Add/Edit Screen"
              />
            </Link>
            <Link to={"studentlist"}>
              {" "}
              <TreeItem itemId={randomId()} label="Student List Screen" />
            </Link>
            {/* <Link to={"transferstudent"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Transfer Student Screen"
              />
            </Link> */}
          </TreeItem>
          <TreeItem itemId={randomId()} label="Teacher">
            <Link to={"addandEeditteacher"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Teacher Add/Edit Screen"
              />
            </Link>
            <Link to={"teacherlist"}>
              {" "}
              <TreeItem itemId={randomId()} label="Teacher List Screen" />
            </Link>
            {/* <Link to={"teacherallocation"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Teacher Allocation Screen"
              />
            </Link> */}
          </TreeItem>
          <TreeItem itemId={randomId()} label="Subjects">
            <Link to={"addandeditsubject"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Subject Add/Edit Screen"
              />
            </Link>
            <Link to={"subjectlist"}>
              {" "}
              <TreeItem itemId={randomId()} label="Subject List Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId={randomId()} label="School">
            <Link to={"registration"}>
              {" "}
              <TreeItem itemId={randomId()} label="Registration" />
            </Link>
          </TreeItem>
          <TreeItem itemId={randomId()} label="Syllabus">
            <Link to={"syllabusform"}>
              {" "}
              <TreeItem itemId={randomId()} label="Syllabus Form" />
            </Link>
            <Link to={"syllabuslist"}>
              {" "}
              <TreeItem itemId={randomId()} label="Syllabus List Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId={randomId()} label="Class">
            <Link to={"classform"}>
              {" "}
              <TreeItem itemId={randomId()} label="Class Form Screen" />
            </Link>
            <Link to={"classlist"}>
              {" "}
              <TreeItem itemId={randomId()} label="Class List Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId={randomId()} label="Fee">
            <Link to={"feestructure"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Fee Structure Screen"
              />
            </Link>
            <Link to={"feesubmission"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Fee Submission Screen"
              />
            </Link>
            <Link to={"feevoucher"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Fee Voucher Screen"
              />
            </Link>
          </TreeItem>
          <TreeItem itemId={randomId()} label="Admission">
            <Link to={"admissionscreen"}>
              {" "}
              <TreeItem itemId="adission-screen" label="Admission Screen" />
            </Link>
          </TreeItem>
          <TreeItem itemId={randomId()} label="Exam">
            <Link to={"examschedule"}>
              {" "}
              <TreeItem
                itemId={randomId()}
                label="Exam-Schedule-Screen"
              />
            </Link>
            <Link to={"examresult"}>
              {" "}
              <TreeItem
                itemId={randomId()}
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
