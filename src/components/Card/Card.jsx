import React from "react";
import imgHeader from "../../assets/imgHeader.jpg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Card = ({post, btnText}) => {

  

  return (
    <div className="w-full md:w-1/5 m-14 md:m-20 flex justify-center md:justify-between">
      <div className="card bg-base-100 image-full w-full shadow-xl">
        <figure>
          <img src={imgHeader} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="badge badge-secondary">{post.categoria}</div>
          <h2 className="card-title">{post.nome}</h2>
          <p>{post.anteprima}</p>
          <div className="card-actions justify-end">

            <Link to={`/detail/${post.id}`} post={post}>
              <Button text={btnText}></Button>
           </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


