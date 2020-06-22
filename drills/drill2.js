'use strict';

let obj = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam',
};

for (const prop in obj) {
  console.log(`${obj.prop}`);
}