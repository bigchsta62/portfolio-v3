import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PageData } from "../../data_sources/data_sources";

function PageLinks() {
  const location = useLocation();
  return (
    <ul className="navbar-nav mr-auto">
      {PageData.map((data, key) => (
        <li key={key} className="nav-item">
          <Link to={data.url} className={location.pathname === data.url ? "nav-link active" : "nav-link"}>
            {data.name}
            
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PageLinks;
