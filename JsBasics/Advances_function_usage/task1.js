

const isOdd = (n) => n % 2 !== 0;

const callback1 = () => {
  console.log("The number is an odd number.");
};
const callback2 = () => {
  console.log("The number is an even number.");
};

const handleNum = (num, callback1, callback2) => {
  if (isOdd(num)) {
    callback1();
  } else {
    callback2();
  }
};

 handleNum(4, callback1, callback2);
 handleNum(7, callback1, callback2);