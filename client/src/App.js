import React, { useState, useEffect } from "react";

// SERVICES THAT CALL OUR API ENDPOINTS
import { getAllProfiles } from "./services/profileService";

function App() {
  const [profiles, setProfiles] = useState(null);

  function deleteCake(event) {
    const id = event.target.dataset["id"];
    var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
    xmlhttp.open("DELETE", "http://localhost:8080/api/profile/" + id);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(
      JSON.stringify({
        title: document.getElementById("title").value,
      })
    );
  }

  useEffect(() => {
    async function getProfiles() {
      if (!profiles) {
        const response = await getAllProfiles();
        setProfiles(response);
      }
    }

    getProfiles();
  }, [profiles]);

  const renderProfile = (user) => {
    return (
      <div>
        <li key={user._id}>
          <h3>
            {`${user.title} 
          ${user.description}`}
          </h3>
          <p>{user.summary}</p>
          <img src={user.image} width="400" height="400"></img>
          {/* <button data-id={user._id} onClick={deleteCake}> */}
            {/* Delete */}
          {/* </button> */}
        </li>
      </div>
    );
  };

  return (
    <div>
      <ul>
        {profiles && profiles.length > 0 ? (
          profiles.map((profile) => renderProfile(profile))
        ) : (
          <p>No Cakes found</p>
        )}
      </ul>
    </div>
  );
}

export default App;
