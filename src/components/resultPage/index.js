import React from 'react';
import { useParams } from 'react-router-dom';
import SearchForm from '../search';
import FlightInformation from './components/flightInformation';

function ResultPage() {

  let { flight } = useParams();
  
  return (
    <div>
      <SearchForm />
      <FlightInformation flight={flight} />
    </div>	
  );
}

export default ResultPage;
