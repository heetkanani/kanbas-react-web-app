import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";

import {
  FaBars,
  FaBook,
  FaCaretDown,
  FaCheckSquare,
  FaEye,
  FaHistory,
  FaHome,
  FaInbox,
  FaLaptop,
  FaPencilAlt,
  FaPlug,
  FaRegCalendarAlt,
  FaRegShareSquare,
  FaRegUserCircle,
  FaTachometerAlt,
} from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

function NavResponsive() {
  const [isNav, setisNav] = useState<boolean>(false);
  const [IsCourseNav, setIsCourseNav] = useState<boolean>(false);
  const courseLinks = [
    { title: "Home", icon: <FaHome /> },
    { title: "Modules", icon: <FaBook /> },
    { title: "Piazza", icon: <FaPlug /> },
    { title: "Zoom Meetings", icon: <FaRegCalendarAlt /> },
    { title: "Assignments", icon: <FaPencilAlt /> },
    { title: "Quizzes", icon: <FaBook /> },
    { title: "Grades", icon: <FaCheckSquare /> },
    { title: "People", icon: <IoMdPeople /> }

  ];
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" style={{color:'grey',}}/>  },
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
    <>
      {isNav ? (
        <div className="w-100 d-md-none d-block">
          <div className="mb-4 p-3 w-100 d-flex justify-content-end">
            <IoClose
              style={{ color: "grey", cursor: "pointer" }}
              onClick={() => setisNav(false)}
            />
          </div>
          <ul className="wd-dashboard wd-kanbas-navigation-navbar" >
            {links.map((link, index) => (
              <li key={index} className={pathname.includes(link.label) ? "wd-active" : "" } style={{color:"red"}}
                onClick={() => setisNav(false)}>
                <Link to={`/Kanbas/${link.label}`}>
                  {link.icon} {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <>
          <div className="d-md-none d-flex justify-content-between align-items-center p-2"
          style={{backgroundColor:"black"}}>
            <div>
              <FaBars
                style={{ cursor: "pointer",color:"white" }}
                onClick={() => setisNav(true)}
              />
            </div>
            <div className="text-center mt-2" style={{ color:"white" }}>
              <h6>CS5610.12631.202410</h6>
              <p>Modules</p>
            </div>
            <div>
              <FaEye style={{ color:"white" }} />
              {IsCourseNav ? (
                <IoClose
                  style={{ cursor: "pointer" , color:"white"}}
                  onClick={() => setIsCourseNav(false)}
                />
              ) : (
                <FaCaretDown
                style={{ cursor: "pointer" , color:"white"}}
                  onClick={() => setIsCourseNav(true)}
                />
              )}
            </div>
          </div>
          {IsCourseNav && (
            <div className="wd-dashboard wd-kanbas-navigation-navbar">
              <ul>
                {courseLinks.map((link, index) => (
                  <li key={index} onClick={() => setIsCourseNav(false)}>
                    <Link to={link.title}>
                      {link.icon} {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default NavResponsive;