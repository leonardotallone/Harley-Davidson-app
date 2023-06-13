import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

// import AvatarIMG from "../../images/profile1.png"
// import { signOut } from "../../store/reducers/actions/authActions";

const NavbarLinks = () => {
  // const [isHovering, setIsHovering]= useState(false);
  
  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };
  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };
    
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const M = window.M;
  useEffect(() => {
    M.AutoInit();
  },[M]);

//   const refreshPage = () => {
//     window.location.reload();
//   };

  // const user = useSelector((state) => state.firebase.auth.uid);
  // const userEmail = useSelector((state) => state.firebase.auth.email);
  // const userUrl = useSelector((state) => state.firebase.profile.url);
  


  // const logOut = (e) => {
  //   e.preventDefault();
  //   dispatch(signOut());
  //   navigate("/");
  
  // };

  return <>
  


  <ul className="right">
      <a data-target="mobile-demo" href="null" className="sidenav-trigger sarmiento-text">
        <i className="material-icons">menu</i>
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a className="dropdown-trigger" href="null" data-target="dropdown1">
            Futbol<i className="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown1" className="dropdown-content">
            <li><NavLink to="/profesional">Profesional</NavLink></li>
            <li><NavLink to="/reserva">Reserva</NavLink></li>
            <li><NavLink to="/femenino">Femenino</NavLink></li>
            <li className="divider"></li>
            <li><NavLink to="/entradas">Entradas</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/autoridades">Autoridades</NavLink></li>
        <li><NavLink to="/sponsors">Sponsors</NavLink></li>
        <li><NavLink to="/historia">Historia</NavLink></li>
        <li><NavLink to="">|</NavLink></li>
        <li><NavLink to="/entradas">Entradas</NavLink></li>
        <li><NavLink to="/noticias">Noticias</NavLink></li>
        <li><NavLink to="/shop">CAS Shop</NavLink></li>

        <li><NavLink to="">|</NavLink></li>
        
        <li className="bold">Sign In</li>
        <li>
         <NavLink to="/signin"><i className="material-icons right">fingerprint</i></NavLink>
         {/* <a href="/"><i className="material-icons right sarmiento-text">logout</i></a> */}
        </li>

        {/* <li>{!user? 
         <NavLink to="/signin"><i className="material-icons right sarmiento-text">fingerprint</i></NavLink>:
         <a href="/"><i onClick={logOut} className="material-icons right sarmiento-text">logout</i></a>
         }
        </li>  */}
       
        {/* <li>{user? (userUrl?
              <NavLink to="/userprofile">
                <img
                  onMouseOver={handleMouseOver} 
                  onMouseOut={handleMouseOut} 
                  href="/userprofile"
                  src={userUrl}
                  alt=""
                  className="avatar-nav btn-floating"
                  // className="btn btn-floating green darken-2"
                ></img>
              </NavLink>:
               <NavLink to="/userprofile" >
               <img
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut} 
                href="/userprofile"
                src={AvatarIMG}
                alt=""
                className="btn btn-floating green darken-2"
               ></img>
               
             </NavLink>):null}
          </li>  */}


      </ul>

          {/* {isHovering && <p className="hovering-hand">Cuenta Sarmiento ID <br />
            {userEmail} </p>} */}

            {/******************************************Esto es el SIDENAV ********************************/}
          
         
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a className="dropdown-trigger" href="null" data-target="dropdown2">
          Futbol<i className="material-icons right">arrow_drop_down</i>
          </a>
          <ul id="dropdown2" className="dropdown-content">
            <li><NavLink className="sidenav-close" to="/profesional">Profesional</NavLink></li>
            <li><NavLink className="sidenav-close" to="/reserva">Reserva</NavLink></li>
            <li><NavLink className="sidenav-close" to="/inferiores">Inferiores</NavLink>
            </li><li className="divider"></li>
            <li><NavLink className="sidenav-close" to="/femenino">Femenino</NavLink>
            </li>
          </ul>
        </li>
        <li><NavLink className="sidenav-close" to="/autoridades">Autoridades</NavLink></li>
        <li><NavLink className="sidenav-close" to="/sponsors">Sponsors</NavLink></li>
        <li><NavLink className="sidenav-close" to="/historia">Historia</NavLink></li>
        <li className="divider"></li>
        <li><NavLink className="sidenav-close" to="/entradas">Entradas</NavLink></li>
        <li><NavLink className="sidenav-close" to="/noticias">Noticias</NavLink></li>
        <li className="bold"><NavLink className="sidenav-close" to="/shop">CAS Shop</NavLink></li>
        <li className="divider"></li>
        <li className="sarmiento-text bold sarmiento-id">Sarmiento ID</li>
{/*        
        <li>{!user? 
         <NavLink className="sidenav-close" to="/signin"><i className="material-icons sarmiento-text">fingerprint</i></NavLink>:
         <a href="/"><i onClick={logOut} className="material-icons sarmiento-text">logout</i></a>
         }
        </li>  */}

        {/* <li>{user ? (userUrl?
              <NavLink to="/userprofile">
                <img
                  onMouseOver={handleMouseOver} 
                  onMouseOut={handleMouseOut} 
                  href="/userprofile"
                  src={userUrl}
                  alt=""
                  className="avatar-nav btn-floating sidenav-close"
                ></img>
              </NavLink>:
               <NavLink to="/userprofile" >
               <img
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut} 
                href="/userprofile"
                src={AvatarIMG}
                alt=""
                className="btn btn-floating green darken-2 sidenav-close"
               ></img>
               
             </NavLink>):null}
          </li>  */}

        
      </ul>
    </ul>
  
  </>;
};
export default NavbarLinks;
