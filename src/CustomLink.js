import React from 'react';
import {
    Link,
    useMatch,
    useResolvedPath,
  } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
        <Link
        className={`${match? 'border-b-2 border-white':'border-0'} flex items-center hover:text-secondary`}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
};

export default CustomLink;