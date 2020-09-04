import React, { useEffect, useState } from "react";
import "./App.css";
import Videos from "./Videos";
import axios from "./axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  console.log(videos);
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({url, name, description, songname, likes , messages, shares}) => (
          <Videos
          url= {url}
          name= {name}
          description= {description}
          songname= {songname}
          messages={messages}
          shares={shares}
          
          />

        ))} 
      
      
      </div>
      {/* app container */}
      {/* videos */}
    </div>
  );
}

export default App;
