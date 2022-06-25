import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card"
import list from "./components/objlist"


function App() {
  const d= list.map((list)=>{
    return <Card img={list.img} likes={list.likes} comments={list.comments} views={list.views} />
  })
  return (
    <div>
       <Navbar />
       {d}
      </div>
     
    
  );
}

export default App;
