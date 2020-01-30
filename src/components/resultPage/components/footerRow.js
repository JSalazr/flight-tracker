import React from 'react';
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
export default FooterRow;
