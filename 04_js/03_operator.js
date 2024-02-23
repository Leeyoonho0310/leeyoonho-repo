console.log("connected!");

// 대입 연산자
// =
// 변수에 값을 할당할 때 사용하는 연산자
let a = 1;
const b = "1";

// 비교 연산자
// ==, !=
// 피연산자와 값이 같은지 비교
// =, ==, != (연산자)
// a = b (연산을 당하는 a, b가 피연산자)
// 타입이 달라도 괜찮음 -> 값만 비교하기 때문
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == "1"); // true
console.log(1 != 1); // 1과 1이 같지 않다! -> 거짓 -> false
console.log(1 != 2); // true
console.log(1 != "1"); // false

// ===, !==
// 피연산자의 값과 타입을 모두 비교
// 엄격한 동등 연산자
console.log("------------------------------");
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false -> 숫자 1과 문자 1은 다른 타입
console.log(1 !== 1); // 숫자 1과 숫자 1은 같지 않다! -> false
console.log(1 !== 2); // 숫자 1과 숫자 2는 같지 않다! -> true
console.log(1 !== "1"); // 숫자 1과 문자 1은 같지 않다! -> true

// 크기 비교
// >, >=, <, <=
console.log("------------------------------");
console.log(2 > 1); // true
console.log(1 >= 1); //true
console.log(2 < 1); //false
console.log(1 <= 1); //true

// 산술 연산자
// +, -, *, /, %(나머지), **(제곱)
console.log("------------------------------");
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
console.log(1 / 2); // 0.5
console.log(20 % 11); // 9
console.log(2 ** 2); // 4

// 논리 연산자
// !, &&(and), ||(or) -> enter키 위 + shift
console.log(!true); // fasle
console.log(!false); // true
console.log(!!true); // true -> !때문에 false - > ! 때문에 true -> true
console.log(!!false); // false -> !때문에 true- > ! 때문에 false -> false

console.log(true && true); // 두 개의 값 모두 true -> true
console.log(1 < 2 && 1 < 5); // true
console.log(1 > 2 && 1 < 5); // false

console.log(true || true); // 둘 중의 하나의 값이라도 true -> true
console.log(true || false); // true
console.log(1 > 2 || 1 < 5); //true
console.log(1 > 2 || 1 > 5); // 두 개의 값 모두 false -> false

// 연산자 응용
console.log("------------------------------");
console.log(!(2 > 1));
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 < 1) || 5 > 3);

// Quiz
// 코드 결과 작성
3 <= 1;
7 == "7";
-10 >= -11;

console.log(3 <= 1); // false
console.log(7 == "7"); // true
console.log(-10 >= -11); //true
