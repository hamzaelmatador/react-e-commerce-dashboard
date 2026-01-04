import "../styles/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faTachometerAlt,
  faShoppingBag,
  faShoppingCart,
  faUsers,
  faChartBar,
  faTags,
  faCog,
  faCannabis,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({isOpen , closeSidebar}) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""} `}>
      <div className="sidebarheader">
        <FontAwesomeIcon icon={faCannabis} className="logo-icon" />
        <h2>Cris<span>Weed</span></h2>
      </div>

      <nav>
        <NavLink to="/" end onClick={closeSidebar} >
          <FontAwesomeIcon icon={faTachometerAlt} />
          <p>Dashboard</p>
        </NavLink>

        <NavLink to="/products" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faShoppingBag} />
          <p>Products</p>
        </NavLink>

        <NavLink to="/orders" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <p>Orders</p>
        </NavLink>

        <NavLink to="/customers" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faUsers} />
          <p>Customers</p>
        </NavLink>

        <NavLink to="/analytics" onClick={closeSidebar} >
          <FontAwesomeIcon icon={faChartBar} />
          <p>Analytics</p>
        </NavLink>

        <NavLink to="/categories" onClick={closeSidebar} >
          <FontAwesomeIcon icon={faTags} />
          <p>Categories</p>
        </NavLink>

        <NavLink to="/settings" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faCog} />
          <p>Settings</p>
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
