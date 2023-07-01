import React from "react";

import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineWidgets} from 'react-icons/md'
import {TbReportAnalytics} from 'react-icons/tb'
import {FaBusinessTime} from 'react-icons/fa'
import {BsDatabaseFillGear} from 'react-icons/bs'
import {FaFileContract} from 'react-icons/fa'
import {BsWrenchAdjustable} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './home.css';
import { Link } from "react-router-dom";
class Home extends React.Component {
    render() {
        return (
            // <div className="video">
            // <video className='video' autoPlay loop muted>
            // <source src={Sample} type='video/mp4' />
            // </video>
    <div className="menu-bar home">
        <ul className="menubar">
            <li className="active"><a href ="#"><AiOutlineHome size={20} color="red"/><br></br><Link to='/'>Home</Link></a></li>
            <li><a href ="#"><MdOutlineWidgets size={20} color="red"/><br></br>New</a>
                <div className="sub-menu-1">
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Customer</a></li>
                        <li><a href="#">Employee</a></li>
                        <li className="hover-me"><a href="#">Customer Employee</a><i class="fa fa-angle-right"></i>
                        <div className="sub-menu-2">
                            <ul>
                                <li><a href="#">Personal</a></li>
                                <li><a href="#">Professional</a></li>
                            </ul>
                        </div></li>
                        <li><a href="#">Task</a></li>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Defect</a></li>
                        <li><a href="#">Vertical Lead</a></li>
                        <li><a href="#">TS-Entry Request</a></li>
                    </ul>
                </div>
            </li>
            <li><a href="#"><TbReportAnalytics size={20} color="red"/><br></br>Report</a>
              <div className="sub-menu-1">
              <ul>
              <li><a href="#">View all</a></li>
              <li><a href="#">Project Wise</a></li>
              <li><a href="#">Consollidated</a></li>
              <li><a href="#">OTR-TimeSheet</a></li>
              <li><a href="#">IGO-DMCC</a></li>
              <li><a href="#">Adani</a></li>
              <li><a href="#">ISPL</a></li>
              <li><a href="#">Emp Professional</a></li>
              
              
              </ul></div></li> 

            <li><a href ="#"><FaBusinessTime size={20} color="red" /><br></br>TimeSheet</a>
                <div className="sub-menu-1">
                    <ul>
                        <li><a href="#">TimeSheet</a></li>
                        <li><a href="#">View T-S</a></li>
                        <li><a href="#">ReOpen T-S</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href ="#"><BsDatabaseFillGear size={20} color="red" /><br></br>Configure</a></li>
            <li><a href ="#"><FaFileContract size={20} color="red" /><br></br>Late Details</a></li> 
            <li><a href ="#"><BsWrenchAdjustable size={20} color="red" /><br></br>IForgot</a></li>
            <li><FiLogOut size={20} color="red" /><br></br>
            <Link className="nav-link" to={'/sign-in'}>
            Logout
          </Link>
          </li>
        </ul>
    </div>
// </div>
        );
        }
    }
    export default Home;