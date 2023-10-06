import fruits from './foods';
import { choice, remove } from './helpers';

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please!`);

fruit = remove(fruits, fruit);

console.log(`Here you go: ${fruit}`);

console.log(`Delicious, may I have another?`);

console.log(`I'm sorry, we're all out. We have ${fruits} left`);
