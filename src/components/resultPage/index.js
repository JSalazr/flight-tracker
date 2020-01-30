import React from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from '../search';
import FlightInformation from './components/flightInformation';

function ResultPage() {

  let { flight } = useParams();
  
  return (
    <>
      <div className='navbar'>
        <SearchForm />
      </div>	
      <FlightInformation flight={flight} />
    </>	
  );
}

export default ResultPage;
