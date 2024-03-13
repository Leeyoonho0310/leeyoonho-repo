console.log("connected!");

// 1
function isDone(time) {
  if (time >= 16) {
    return true;
  } else {
    return false;
  }
}

console.log(isDone(3));
console.log(isDone(14));
console.log(isDone(16));
console.log(isDone(20));

console.clear();

// 2
function printMsg(msg) {
  for (let i = 0; i < 3; i++) {
    console.log(msg.toUpperCase());
  }
}
printMsg("I love you!");

console.clear();

// 3
function whatDay(day) {
  switch (day) {
    case 1:
      console.log("월");
      break;
    case 2:
      console.log("화");
      break;
    case 3:
      console.log("수");
      break;
    case 4:
      console.log("목");
      break;
    case 5:
      console.log("금");
      break;
    case 6:
      console.log("토");
      break;
    case 7:
      console.log("일");
      break;
    default:
      console.log("null");
      break;
  }
}

whatDay(3);
whatDay(7);
whatDay(0);
whatDay(10);
whatDay("5");

console.clear();

// 4
function diceNumber(first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    return "Not a Number";
  }

  const sum = first + second;
  if (sum % 4 === 0) {
    return "4의 배수";
  } else {
    return "4의 배수 아님";
  }
}

console.log(diceNumber(1, 2));
console.log(diceNumber(5, 3));
console.log(diceNumber("a", "2"));
console.log(diceNumber(1, "5"));
