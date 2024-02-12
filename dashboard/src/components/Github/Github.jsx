import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch('https://api.github.com/users/anish7273')
    .then( response => response.json())
    .then( data =>{
        console.log(data);
        setData(data)
    })
  },[])




  return (
  
  <div className="text-center m-4 bg-green-600 text-white p-4 text-3xl">
   Github folllowers: {data.following}
   <img className="mx-auto block" src={data.avatar_url} alt="Github Pic" width={300} />
    
    </div>
  )
}

export default Github;
