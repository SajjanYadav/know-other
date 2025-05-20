import React, { useEffect, useState } from "react";
import Details from "./components/Details";
import banner from './your-video.mp4'

const App = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchDataOfUsers() {
      const url = "https://dummyjson.com/users?limit=50&skip=0";
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setUserData(data.users);
      } catch (err) {
        console.log(err);
      }
    }

    fetchDataOfUsers();
  }, []);

  return (
    <div class="app-container">
      <video autoPlay loop muted id="bg-video">
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div class="content-overlay">
        <Details userData={userData} />
      </div>
    </div>
  );
};

export default App;
