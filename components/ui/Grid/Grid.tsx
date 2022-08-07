import { FC, ReactNode } from "react"
import s from "./Grid.module.css"


type CompProps = {
  children: React.ReactNode;
 };
  

const Grid: FC<CompProps> = ({children} ) => {

return (
<div className={s.root}>
  {children}
</div>

)

}

export default Grid