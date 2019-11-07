import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
            <div onClick={() => props.selectFriend(props.id)}>
              <img className="click-item" alt="Dogs"  src={props.image}/>
            </div>
       
  );
}

export default FriendCard;
