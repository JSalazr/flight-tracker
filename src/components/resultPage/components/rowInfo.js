import React from 'react';

function rowInfo({
  title,
  value
}) {
  return (
      <div className='row-info'>
        <div className='row-info-title'>{title}</div>
        {value}
      </div>
  );
}
export default rowInfo;
