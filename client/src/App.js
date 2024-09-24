
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firstPerson from './images/person1.svg';
import Header from './components/Header';
import './App.css';
import MentorCard from './components/MentorCard';
import MentorInfo from './components/MentorInfo';
const port = process.env.PORT || 5001;

import SearchBar from './components/SearchBar';  // Import the SearchBar component
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// import { useRef } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// import LoginSignup from "./components/LoginSignup.jsx";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import firstPerson from "./images/person1.svg";
// import Header from "./components/Header";
// import "./App.css";
// import MentorCard from "./components/MentorCard";
// const port = process.env.PORT || 5001;

function App() {
  const [mentors, setMentors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');  // Search query state

  useEffect(() => {
    // Fetch mentors from the API, including the search query if it's not empty
    const fetchMentors = () => {
      const query = searchQuery ? `?search=${searchQuery}` : '';
      axios.get(`/api/mentors${query}`)
        .then(response => setMentors(response.data))  
        .catch(error => console.error(`There was an error retrieving the mentors: ${error}`));
    };

    fetchMentors();
  }, [searchQuery]);  // Refetch the mentors whenever the searchQuery changes

  // return (
  //   <div className="App">
  //     <Header />

  //     {/* Pass the setSearchQuery function to SearchBar */}
  //     <SearchBar setSearchQuery={setSearchQuery} />

  //     <div className="mentor-list">
  //       {mentors.length > 0 ? (
  //         mentors.map((mentor) => (
  //           <MentorCard 
  //             key={mentor.id}
  //             firstName={mentor.firstname}  
  //             lastName={mentor.lastname}
  //             avatar={mentor.avatar}
  //             field={mentor.field}
  //             languages={mentor.languages}
  //           />
  //         ))
  //       ) : (
  //         <p>No mentors found</p>  // Show if no mentors match the query
  //       )}
  //     </div>

  //     <Footer/>
  //   </div>
  return (

//     <div className="App">
//       <Header/>
      
//       {/* add here upcoming events*/}

//       <input 
//           type="text" 
//           placeholder="Search by name or skill"
//           className="search-bar"
//         />

//       <div className="mentor-list">
//         {/* must pass on the database records and add as needed */}
//         <MentorCard name="Haya" />
//         <MentorCard name="Haya2" />
//         <MentorCard name="Haya3" />
//       </div>

    
//       <h1>{message}</h1>
//       <img src={firstPerson} alt="person1" />
//       <br/>

//       <MentorInfo id={1} />

//       <div><h1>popup</h1></div>
//     </div>

    <Router>
      <Routes>
        {/* Default route - redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Login Route */}
        <Route path="/login" element={<Login />} />

        {/* Signup Route */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}
    
export default App;
