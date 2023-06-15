import { BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";
import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp,Person,Storefront,ChecklistRtl,Report,ManageSearch} from "@mui/icons-material"
import Menu from "../../paginas/Menu";
import Analisis from "../../paginas/analisis/analisis";
import Ingresos from "../../paginas/ingresos/ingresos";
import Productos from "../../paginas/productos/productos";
import Usuarios from "../../paginas/usuarios/usuarios";
import Pedidos from "../../paginas/pedidos/pedidos";
import Administrar from "../../paginas/administrar/administrar";
import Reportes from "../../paginas/reportes/reportes";

export default function Sidebar() {
  return (
    
    <Router>
      <div className="sidebarL">
    
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Panel de control</h3>
            <ul className="sidebarList">
                <li className="sidebarLisItem active">
                  <LineStyle className="sidebarIcon"/>
                  <Link to="/">Menu</Link>
                </li>
                <li className="sidebarLisItem">
                 <Timeline className="sidebarIcon"/>
                 <Link to="/Analisis">Analisis</Link>
               </li>
               <li className="sidebarLisItem" >
                 <TrendingUp className="sidebarIcon"/>
                 <Link to="/Ingresos">Ingresos</Link>
              </li>
                <li className="sidebarLisItem">
                 <Storefront className="sidebarIcon"/>
                 <Link to="/Productos">Productos</Link>
              </li>
              <li className="sidebarLisItem">
                <Person className="sidebarIcon"/>
                <Link to="/Usuarios">Usuarios</Link>
            </li>
           <li className="sidebarLisItem">
             <ChecklistRtl className="sidebarIcon"/>
             <Link to="/Pedidos">Pedidos</Link>
         </li>
            </ul>
        </div>
        
  <div className="sidebarMenu">
      <h3 className="sidebarTitle">Personal</h3>
      <ul className="sidebarList">
          <li className="sidebarLisItem">
           <ManageSearch className="sidebarIcon"/>
           <Link to="/Administrar">Administrar</Link>
         </li>
         <li className="sidebarLisItem">
           <Report className="sidebarIcon"/>
            <Link to="/Reportes">Reportes</Link>
        </li>
      </ul>
  </div>
    </div>
    </div>
    <Routes>
        	<Route path="/" element={<Menu />} />
        	<Route path="/Analisis" element={<Analisis />} />
          <Route path="/Ingresos" element={<Ingresos />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Pedidos" element={<Pedidos/>} />
          <Route path="/Administrar" element={<Administrar />} />
          <Route path="/Reportes" element={<Reportes />} />
        </Routes>
    </Router>
    
  )
}
