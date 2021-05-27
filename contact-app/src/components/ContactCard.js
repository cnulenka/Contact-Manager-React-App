import React from "react";
import user from "../images/user.png";
import {Link} from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contacts/${id}`}>
            <div className="header">{name}</div>
            <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon right"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;