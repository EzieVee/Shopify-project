
// import {FC} from "react"

// const Layout: FC = ({children}) => {
//   return (
//     <div className="layout">

//     </div>
//   )
// }

// export default Layout


//1 Updated since old react caused issues
import React, { FC } from "react";
 
type CompProps = {
 children: React.ReactNode;
};
 
const Layout: FC<CompProps> = ({ children }) => {
  return <div className="layout"> {children}</div>;
};
 
export default Layout;