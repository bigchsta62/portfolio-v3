import React from "react";
import { socialData } from "../../data_sources/data_sources";

function SocialLinks() {
return(
    <div className="container-flex">
          {socialData.map((data, key) => (
            <a
              key={key}
              href={data.url}
              className={data.icon}
              target="_blank"
            ></a>
          ))}
        </div>
        
)
}

export default SocialLinks;