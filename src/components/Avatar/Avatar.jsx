import Img from "../Img/Img";
import AvatarF from '../../assets/avatar/avatar-96-F.png';
import AvatarM from '../../assets/avatar/avatar-96-M.png';
import AvatarNT from '../../assets/avatar/avatar-96-NT.png';
import { useContext } from "react";
import { LoggedContext } from "../../contexts/ContextLog";



const Avatar = () => {

  const {logged, select} = useContext(LoggedContext)
   
  return (
    <div className="avatar">
      <div className="w-12  rounded-full grid gap-y-1 grid-cols-1 d-flex justify-items-center">
        {
          logged && select == "Maschio" ? <Img src={AvatarM} alt={"Immagine profilo"}></Img> : null
        }
        {
          logged && select == "Femmina" ? <Img src={AvatarF} alt={"Immagine profilo"}></Img> : <Img src={AvatarNT} alt={"Immagine profilo"}></Img>
        }
        
      </div>
    </div>
  );
};

export default Avatar;
