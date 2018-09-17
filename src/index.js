import './index.css';

import numeral from 'numeral';

var courseValue = numeral(1000).format('$0,0.00');

console.log(`I would like to pay ${courseValue} for this dope course!`);//eslint-disable-line no-console
