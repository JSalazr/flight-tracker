import React from 'react';
import PropTypes from 'prop-types';
import RowInfo from './rowInfo';
import { FaPlaneDeparture } from 'react-icons/fa'

function DepartureArrivalRow({
  departureTerminal,
  departureTime,
  departureDate,
  arrivalTerminal,
  arrivalTime,
  arrivalDate,
}) {
  return (
    <div className='departure-arrival-container'>
      <div className='departure-arrival-row'>
        <RowInfo title={'DEPARTURE GATE'} value={departureTerminal} />
        <RowInfo title={'DEPARTURE'} value={departureTime} />
        <RowInfo title={'DEPARTURE DATE'} value={departureDate} />
      </div>
      <div className='departure-arrival-row'>
        <RowInfo title={'ARRIVAL GATE'} value={arrivalTerminal} />
        <RowInfo title={'ARRIVAL'} value={arrivalTime} />
        <RowInfo title={'ARRIVAL DATE'} value={arrivalDate} />
      </div>
      <div className='plane-icon'>
        <FaPlaneDeparture />
      </div>
    </div>
  );
}

DepartureArrivalRow.propTypes = {
  departureTerminal: PropTypes.string,
  departureTime: PropTypes.string,
  departureDate: PropTypes.string,
  arrivalTerminal: PropTypes.string,
  arrivalTime: PropTypes.string,
  arrivalDate: PropTypes.string,
};
export default DepartureArrivalRow;
