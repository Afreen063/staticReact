import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card"


function App() {
  return (
    <div>
       <Navbar />
       <Card
        img="https://tse4.mm.bing.net/th?id=OIP.HFNixjygsuGGQdQWjACZ5gHaEo&pid=Api&P=0&w=343&h=214" 
        likes={90}
        comments={["good","bad"]}
        views="50"
        />
       <Card 
       img ="https://wallpapercave.com/wp/HeLC3lH.jpg"
       likes={80}
       comments={["good","bad"]}
       views="20"
       />
       <Card
       img="http://getwallpapers.com/wallpaper/full/3/6/a/530610.jpg" 
       likes={67}
       comments={["good","bad"]}
       views="10"/>
       <Card 
       img="https://downloadhdwallpapers.in/wp-content/uploads/2019/02/captain-marvels-4k-ultra-hd-wallpapers-3.jpg"
       likes={78}
       comments={["good","bad"]}
       views="80"/>
          </div>
     
    
  );
}

export default App;
