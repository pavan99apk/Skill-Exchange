// import { Link, useLocation, Outlet } from 'react-router-dom';
// import logo from "./image/logo.png";

// export const UserNavbar = () => {
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path ? "active" : "";

//   return (
//     <>
//       <nav className="app-header navbar navbar-expand bg-body">
//         <div className="container-fluid">
//           {/* Logo */}
//           <Link to="/" className="navbar-brand d-flex align-items-center me-3">
//             <img src={logo} alt="Skill Exchange Logo" style={{ height: "70px", width: "70px" }} />
//           </Link>

//           {/* Main Nav Links */}
//           <ul className="navbar-nav">
//             <li className="nav-item d-none d-md-block">
//               <Link to="/user/userhome" className={`nav-link ${isActive('/user/userhome')}`}>Home</Link>
//             </li>
//             <li className="nav-item d-none d-md-block">
//               <Link to="/user/skill" className={`nav-link ${isActive('/user/skill')}`}>Skill</Link>
//             </li>
//             <li className="nav-item d-none d-md-block">
//               <Link to="/user/session" className={`nav-link ${isActive('/user/session')}`}>Session</Link>
//             </li>
//             <li className="nav-item d-none d-md-block">
//               <Link to="/user/contact" className={`nav-link ${isActive('/user/contact')}`}>Contact</Link>
//             </li>
//             <li className="nav-item d-none d-md-block">
//               <Link to="/user/userprofile" className={`nav-link ${isActive('/user/userprofile')}`}>Profile</Link>
//             </li>
//           </ul>

//           {/* Right Side Icons */}
//           <ul className="navbar-nav ms-auto">
//             {/* Search Icon */}
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 <i className="bi bi-search" />
//               </Link>
//             </li>

//             {/* Messages Dropdown */}
//             <li className="nav-item dropdown">
//               <Link className="nav-link" data-bs-toggle="dropdown" to="#">
//                 <i className="bi bi-chat-text" />
//                 <span className="navbar-badge badge text-bg-danger">3</span>
//               </Link>
//               <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//                 <Link to="#" className="dropdown-item">No new messages</Link>
//               </div>
//             </li>

//             {/* Notifications Dropdown */}
//             <li className="nav-item dropdown">
//               <Link className="nav-link" data-bs-toggle="dropdown" to="#">
//                 <i className="bi bi-bell-fill" />
//                 <span className="navbar-badge badge text-bg-warning">15</span>
//               </Link>
//               <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//                 <span className="dropdown-item dropdown-header">15 Notifications</span>
//                 <div className="dropdown-divider" />
//                 <Link to="#" className="dropdown-item">
//                   <i className="bi bi-envelope me-2" /> 4 new messages
//                   <span className="float-end text-secondary fs-7">3 mins</span>
//                 </Link>
//                 <div className="dropdown-divider" />
//                 <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
//               </div>
//             </li>

//             {/* Fullscreen Toggle */}
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 <i className="bi bi-arrows-fullscreen" />
//               </Link>
//             </li>

//             {/* User Profile Dropdown */}
//             <li className="nav-item dropdown user-menu">
//               <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">
//                 <img src="../../dist/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User" />
//                 <span className="d-none d-md-inline">Alexander Pierce</span>
//               </Link>
//               <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
//                 <li className="user-header text-bg-primary text-center">
//                   <img src="../../dist/assets/img/user2-160x160.jpg" className="rounded-circle shadow mb-2" alt="User" />
//                   <p>
//                     Alexander Pierce - Web Developer
//                     <br />
//                     <small>Member since Nov. 2023</small>
//                   </p>
//                 </li>
//                 <li className="user-body text-center">
//                   <div className="row">
//                     <div className="col-4"><Link to="#">Followers</Link></div>
//                     <div className="col-4"><Link to="#">Sales</Link></div>
//                     <div className="col-4"><Link to="#">Friends</Link></div>
//                   </div>
//                 </li>
//                 <li className="user-footer d-flex justify-content-between">
//                   <Link to="/user/userprofile" className="btn btn-default btn-flat">Profile</Link>
//                   <Link to="/login" className="btn btn-default btn-flat">Sign out</Link>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </nav>
//          {/* 🔽 Page Content Below Navbar */}
//          <main className="container mt-4">
//         <Outlet />
//       </main>
//       {/* This is where the nested route will render */}
//     </>
//   );
// };
import { Link, useLocation, Outlet } from 'react-router-dom';
import logo from "./image/logo.png";

export const UserNavbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <>
      {/* Navbar */}
      <nav className="app-header navbar navbar-expand bg-body fixed-top w-100" >
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center me-3">
            <img src={logo} alt="Skill Exchange Logo" style={{ height: "70px", width: "70px" }} />
          </Link>

          {/* Main Nav Links */}
          <ul className="navbar-nav">
            <li className="nav-item d-none d-md-block">
              <Link to="/user/userhome" className={`nav-link ${isActive('/user/userhome')}`}>Home</Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="/user/skill" className={`nav-link ${isActive('/user/skill')}`}>Skill</Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="/user/session" className={`nav-link ${isActive('/user/session')}`}>Session</Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="/user/contact" className={`nav-link ${isActive('/user/contact')}`}>Contact</Link>
            </li>
            <li className="nav-item d-none d-md-block">
              <Link to="/user/userprofile" className={`nav-link ${isActive('/user/userprofile')}`}>Profile</Link>
            </li>
          </ul>

          {/* Right Side Icons */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="bi bi-search" /></Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" data-bs-toggle="dropdown" to="#">
                <i className="bi bi-chat-text" />
                <span className="navbar-badge badge text-bg-danger">3</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <Link to="#" className="dropdown-item">No new messages</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" data-bs-toggle="dropdown" to="#">
                <i className="bi bi-bell-fill" />
                <span className="navbar-badge badge text-bg-warning">15</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item">
                  <i className="bi bi-envelope me-2" /> 4 new messages
                  <span className="float-end text-secondary fs-7">3 mins</span>
                </Link>
                <div className="dropdown-divider" />
                <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#"><i className="bi bi-arrows-fullscreen" /></Link>
            </li>
            <li className="nav-item dropdown user-menu">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">
                <img src="../../dist/assets/img/user2-160x160.jpg" className="user-image rounded-circle shadow" alt="User" />
                <span className="d-none d-md-inline">Alexander Pierce</span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <li className="user-header text-bg-primary text-center">
                  <img src="../../dist/assets/img/user2-160x160.jpg" className="rounded-circle shadow mb-2" alt="User" />
                  <p>
                    Alexander Pierce - Web Developer<br />
                    <small>Member since Nov. 2023</small>
                  </p>
                </li>
                <li className="user-body text-center">
                  <div className="row">
                    <div className="col-4"><Link to="#">Followers</Link></div>
                    <div className="col-4"><Link to="#">Sales</Link></div>
                    <div className="col-4"><Link to="#">Friends</Link></div>
                  </div>
                </li>
                <li className="user-footer d-flex justify-content-between">
                  <Link to="/user/userprofile" className="btn btn-default btn-flat">Profile</Link>
                  <Link to="/login" className="btn btn-default btn-flat">Sign out</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container" style={{marginTop:'100px'}}>
        <Outlet />
      </main>
    </>
  );
};
