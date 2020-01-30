import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import RowInfo from './rowInfo';
import { FaPlaneDeparture } from 'react-icons/fa';

function DepartureArrivalRow({
  departureTerminal,
  departureDate,
  arrivalTerminal,
  arrivalDate,
}) {
  return (
    <div className='departure-arrival-container'>
      <div className='departure-arrival-row'>
        <RowInfo title={'DEPARTURE GATE'} value={departureTerminal} />
        <RowInfo title={'DEPARTURE'} value={moment(departureDate).format('H:mm')} />
        <RowInfo title={'DEPARTURE DATE'} value={moment(departureDate).format('MMM D YYYY')} />
      </div>
      <div className='departure-arrival-row'>
        <RowInfo title={'ARRIVAL GATE'} value={arrivalTerminal} />
        <RowInfo title={'ARRIVAL'} value={moment(arrivalDate).format('H:mm')} />
        <RowInfo title={'ARRIVAL DATE'} value={moment(arrivalDate).format('MMM D YYYY')} />
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
