import React from 'react';
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
export default TopRow;
