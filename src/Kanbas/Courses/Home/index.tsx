import { Link } from "react-router-dom";
import ModuleList from "../Modules/List";
import { FaBan, FaBell, FaCalendarAlt, FaCheckCircle, FaFileImport } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { MdGpsFixed } from "react-icons/md";
import { IoBarChart } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
function Home() {
    const links = [
        { name: "Import Existing Content", icon: <FaFileImport /> },
        { name: "Import from Commons", icon: <BiImport /> },
        { name: "Choose Home Page", icon: <MdGpsFixed /> },
        { name: "View Course Stream", icon: <IoBarChart /> },
        { name: "New Announcement", icon: <TfiAnnouncement /> },
        { name: "New Analytics", icon: <IoBarChart /> },
        { name: "View Course Notifications", icon: <FaBell /> },
      ];
  return (
    <div className="d-flex">
        <div className="flex-fill">
        <ModuleList />
        </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block mx-3" style={{width: "250px"}}>
        <h4>Course Status</h4>
        <div className="d-flex gap-1">
          <div>
            <button type="button" className="btn btn-light" style={{ backgroundColor: "lightgray" }}><FaBan/> Unpublished
            </button>
            <button type="button" className="btn btn-success"><FaCheckCircle/>Published          
            </button>
          </div>
        </div>
      <div>
      <ul className="list-group wd-status mb-4">
            {links.map((link) => (
              <Link className="list-group-item list-group-item-action" to="#" key={link.name}>
                {link.icon} {link.name}
              </Link>
            ))}
          </ul>
        </div>
      <div className="d-flex justify-content-between wd-kanbas-navigation-navbar">
          <h5>Coming Up</h5>
          <div >
          <FaCalendarAlt style={{color: "grey;"}}/>
            <Link to="#">
              <label style={{color: "red;"}}>View Calender</label>
            </Link>
          </div>
        </div>
          <hr></hr>
          <div className="wd-kanbas-navigation-navbar">
          <div className="d-flex align-items-start">
            <FaCalendarAlt style={{color: "grey;"}}/>&nbsp;
                <div>
                  <a href="#" style={{color: "red;"}}>Lecture</a>
                  <p style={{color: "gray;", fontSize: "14px", marginBottom: "0%;"}} >CS5610 07 SP24</p>
                  <p style={{color: "gray;", fontSize: "14px;"}}>Jan 20 at 6:00 pm</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
              <FaCalendarAlt style={{color: "grey;"}}/>&nbsp;
                <div>
                  <a href="#" style={{color: "red;"}}>Lecture</a>
                  <p style={{color: "gray;", fontSize: "14px", marginBottom: "0%;"}} >CS5610 07 SP24</p>
                  <p style={{color: "gray;", fontSize: "14px;"}}>Jan 27 at 6:00 pm</p>
                </div>
              </div>
              <div className="d-flex align-items-start">
              <FaCalendarAlt style={{color: "grey;"}}/>&nbsp;
                <div>
                  <a href="#" style={{color: "red;"}}>Lecture</a>
                  <p style={{color: "gray;", fontSize: "14px", marginBottom: "0%;"}} >CS5610 07 SP24</p>
                  <p style={{color: "gray;", fontSize: "14px;"}}>Jan 29 at 6:00 pm</p>
                </div>
              </div>
          </div>
    </div>
    </div>
  );
}
export default Home;