import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
return(
   
    <>
    Hi I am user {userid}
    </>
)

}

export default User