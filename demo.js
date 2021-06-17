const foo = 3;
let bar = foo;
bar = 9;
console.log(foo,bar);


const s1 = [1,2];
const s2 = s1;
s2[0] = 9;
const s3 = s1;

console.log(s1[0],s2[0],s3[0]);


const atom = {
    value: 1,
  
    addValue(value) {
      return atom.value + value;
    },
  };

  console.log(atom.addValue(2));

  const lukeSkywalker = 'Luke Skywalker';
{
  const num = 1;
  const obj ={
    lukeSkywalker,
    num
  }
  const obj2 ={
    f1 : 2,
    num
  }

  const has = Object.prototype.hasOwnProperty;

  console.log(has.call(obj2,'f1'));
 
}


{
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }

    console.log(copy);
    console.log(noA);
}