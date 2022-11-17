import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import {useState, useEffect} from 'react'
import axios from 'axios';
import {Routes, Route} from 'react-router-dom'

function App() {
  const [countries, setCountries] = useState([])


  const getFromApi = async () => {
    try {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

   getFromApi()

  }, [])
  
  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>  
      <CountryDetails/>
      <Routes>
        <Route path="/:countryId" element={ <CountryDetails /> } />
      </Routes>
    </div>
  );
}

export default App;
