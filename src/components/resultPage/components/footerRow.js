import React from 'react';
import PropTypes from 'prop-types';
import RowInfo from './rowInfo';

function FooterRow({
  delay,
  baggage
}) {
  return (
    <div className='footer-row'>
      <RowInfo title={'DELAY'} value={delay} />
      <RowInfo title={'BAGGAGE TERMINAL'} value={baggage} />
    </div>
  );
}

FooterRow.propTypes = {
  delay: PropTypes.any,
  baggage: PropTypes.string
};
export default FooterRow;
