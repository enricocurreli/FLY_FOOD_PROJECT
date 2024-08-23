import Img from "../Img/Img";
import { useContext } from "react";
import { LoggedContext } from "../../contexts/ContextLog";



const Avatar = ({src, classesCnt, classesImg, avtClasses}) => {
   
  return (
    <div className={avtClasses}>
      <div className={classesCnt}>

        <Img src={src} classes={classesImg}/>
        
      </div>
    </div>
  );
};

export default Avatar;
