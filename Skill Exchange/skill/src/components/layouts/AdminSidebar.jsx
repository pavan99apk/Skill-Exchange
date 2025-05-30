// // import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { AdminNavbar } from './AdminNavbar'

// export const AdminSidebar = () => {
//   return (
//     <>
//     <AdminNavbar></AdminNavbar>
//     <aside
//         className="app-sidebar bg-body-secondary shadow"
//         data-bs-theme="dark"
//       >
//         <div className="sidebar-brand">
          
//           <a href="./index.html" className="brand-link">
            
//             <img
//               src="../../dist/assets/img/AdminLTELogo.png"
//               alt="AdminLTE Logo"
//               className="brand-image opacity-75 shadow"
//             />
            
//             <span className="brand-text fw-light">AdminLTE 4</span>
            
//           </a>
          
//         </div>

//         <div
//           className=""
//           data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
//           tabIndex={-1}
//           style={{
//             marginRight: "-16px",
//             marginBottom: "-16px",
//             marginLeft: 0,
//             top: "-8px",
//             right: "auto",
//             left: "-8px",
//             width: "calc(100% + 16px)",
//             padding: 8,
//           }}
//         >
//           <nav className="mt-2">
            
//             <ul
//               className="nav sidebar-menu flex-column"
//               data-lte-toggle="treeview"
//               role="menu"
//               data-accordion="false"
//             >
//               <li className="nav-item menu-open">
//                 <a href="#" className="nav-link active">
//                   <i className="nav-icon bi bi-speedometer" />
//                   <p>
//                     Dashboard
//                     <i className="nav-arrow bi bi-chevron-right" />
//                   </p>
//                 </a>
//                 <ul className="nav nav-treeview">
//                   <li className="nav-item">
//                     <a href="./index.html" className="nav-link active">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Dashboard v1</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./index2.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Dashboard v2</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./index3.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Dashboard v3</p>
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <a href="./generate/theme.html" className="nav-link">
//                   <i className="nav-icon bi bi-palette" />
//                   <p>Theme Generate</p>
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a href="#" className="nav-link">
//                   <i className="nav-icon bi bi-box-seam-fill" />
//                   <p>
//                     Widgets
//                     <i className="nav-arrow bi bi-chevron-right" />
//                   </p>
//                 </a>
//                 <ul className="nav nav-treeview">
//                   <li className="nav-item">
//                     <a href="./widgets/small-box.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Small Box</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./widgets/info-box.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>info Box</p>
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a href="./widgets/cards.html" className="nav-link">
//                       <i className="nav-icon bi bi-circle" />
//                       <p>Cards</p>
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
            
//           </nav>
//         </div>
//       </aside>
//       <main className='app-main'>
//         <Outlet></Outlet>
//       </main>
//       </>
//   )
// }

import { Outlet, Link } from "react-router-dom";
// import { AdminNavbar } from "./AdminNavbar";
import "./adminsidebar.css"

export const AdminSidebar = () => {
  return (
    <>
      {/* <AdminNavbar /> */}
      <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
        <div className="sidebar-brand">
          <Link to="/admin/dashboard" className="brand-link">
            
            <span className="brand-text fw-light">Skill Exchange</span>
          </Link>
        </div>

        <nav className="mt-2">
          <ul className="nav sidebar-menu flex-column" role="menu">
            <li className="nav-item">
              <Link to="/admin/dashboard" className="nav-link active">
                <i className="nav-icon bi bi-speedometer" />
                <p>Dashboard</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin/manageuser" className="nav-link">
                <i className="nav-icon bi bi-people" />
                <p>Manage Users</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin/manageskill" className="nav-link">
                <i className="nav-icon bi bi-lightbulb" />
                <p>Manage Skills</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin/managesession" className="nav-link">
                <i className="nav-icon bi bi-calendar-check" />
                <p>Manage Sessions</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="feedback" className="nav-link">
                <i className="nav-icon bi bi-chat-left-text" />
                <p>Feedback & Reviews</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/admin/notifications" className="nav-link">
                <i className="nav-icon bi bi-bell" />
                <p>Notifications</p>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
};
