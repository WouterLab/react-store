import React from "react";
import "./AdminPage.css";
import SignUp from "../../components/SignUp/SignUp";
import ControlPanel from '../../components/ControlPanel/ControlPanel';

const AdminPage = (props) => {

  return (
    <div className="admin">
      {props.signed ? <ControlPanel removeItem={props.removeItem} data={props.data} /> : <SignUp checkData={props.checkData}/>}
    </div>
  );
};

export default AdminPage;
