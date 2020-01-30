import React from 'react';
import PropTypes from 'prop-types';

function RowInfo({
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

RowInfo.propTypes = {
  title: PropTypes.string,
  value: PropTypes.any
};
export default RowInfo;
