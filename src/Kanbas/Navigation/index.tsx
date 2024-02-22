import { Link, useLocation } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import "./index.css";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaHistory, FaLaptop, FaRegShareSquare } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" style={{color:'white',}}/>  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <MdEmail className="fs-2" /> },
    { label: "History",  icon: <FaHistory className="fs-2" /> },
    { label: "Studio",  icon: <FaLaptop className="fs-2" /> },
    { label: "Commons",  icon: <FaRegShareSquare className="fs-2" /> },
    { label: "Help",  icon: <HiQuestionMarkCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
            <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
export default KanbasNavigation;