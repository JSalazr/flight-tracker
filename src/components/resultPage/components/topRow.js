import React from 'react';
import PropTypes from 'prop-types';
import RowInfo from './rowInfo';

function TopRow({
  flightNumber,
  status,
  origin,
  destination,
  duration
}) {
  return (
    <div className='top-row'>
      <RowInfo title={'FLIGHT'} value={flightNumber} />
      <RowInfo title={'STATUS'} value={status} />
      <RowInfo title={'DESTINATION'} value={`${origin} TO ${destination}`} />
      <RowInfo title={'DURATION'} value={duration} />
    </div>
  );
}

TopRow.propTypes = {
  flightNumber: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  duration: PropTypes.string
};
export default TopRow;
