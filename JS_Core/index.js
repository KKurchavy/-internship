function findAnagrams(source) {
  const group = source.reduce((acc, word) =>{ 
    const sorted = word.split('').sort().join('');
    
    return {
      ...acc,
      [sorted]: [...(acc[sorted] || []), word]
    };
  }, {});

  return Object.values(group);
}

function fibonacciSum(number) {
  var current = 1;
  var sum = 0;

  function inner(num1, num2) {
    if(current > number) {
      return num1;
    }

    sum += current;
    current = num1 + num2;
    return inner(num2, current)
  }

  inner(0,1);

  return sum;
}


Array.prototype.duplicator = function() {
  return this.concat(this);
}