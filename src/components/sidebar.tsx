import { Link } from "react-router-dom";

const Sidebar =()=>{
    return(
        <>
        <ul>
            <li><Link to={''}> Student</Link></li>
            <li><Link to={'/teacher'}> Teacher</Link></li>
            <li><Link to={'/school'}> School</Link></li>
            <li><Link to={'/syllabus'}> Syllabus</Link></li>
            <li><Link to={'/classes'}> Classes</Link></li>
            <li><Link to={'/fees'}> Fees</Link></li>
            <li><Link to={'/admission'}> Admission</Link></li>
            <li><Link to={'/exam'}> Exam</Link></li>
            <li><Link to={''}> Subject</Link></li>
        </ul>
        </>
    );
}
export default Sidebar;