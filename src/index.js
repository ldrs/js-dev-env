import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`The amount is ${courseValue} total!`);
