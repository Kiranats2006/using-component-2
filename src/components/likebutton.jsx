import { useState } from "react";

export default function likeButton(){
    const [liked, setLiked]=useState(false);
    const toggleLike=()=>{
        setLiked(!liked)
    }
    return(
        <button onClick={toggleLike}
        style={{
            padding: "10px 15px",
            fontSize: "14px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            backgroundColor: liked ? "#ff4757" : "#ddd",
            color: liked ? "#fff" : "#333",
            transition: "background-color 0.3s",
          }}>
            {liked?"liked":"like"}
          </button>
    )
}