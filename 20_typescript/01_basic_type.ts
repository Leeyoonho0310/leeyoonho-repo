let num: number = 1;
// num = '1' // error: number 타입으로 지정한 변수는 문자열로 작성 불가
num = 2;
console.log(num);

let str: string = "str";
// 타입 작성하기
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

//원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 ㅊ추론
let isTrue2 = true;
let undef2;
let empty2 = null;

// isTrue2 변수는 boolean 타입이라고 직접 작성하지 않아도
// 알아서 boolean임을 추론해 문자열로 재 할당 시 에러 발생
// isTrue2 = "aa";

// array
// 요소의 갯수를 미리 명시할 필요는 없지만
// array의 요소가 어떤 타입인지는 명시 필요
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ["가", "나", "다", "라"];

// 배열에 여러 개의 타입을 작성하고 싶을 때
// number on string 타입의 요소를 가진 배열
let arr1: (number | string)[] = [1, 2, 3, "가", "나", "다"];
let arr2: Array<number | string> = [1, 2, 3, "가", "나", "다"];

let arr3: (boolean | null | number[])[] = [true, null, false, [4, 22]];
let arr4: Array<boolean | null | number[]> = [true, null, false, [4, 22]];

// 어떤 자료형이든 상관없이 들어갈 수 있는 배열
let arrAny: any[] = [1, 2, 50, false, ["a", "b", 3, false], null];

// object
let obj1: object = {
  name: "layla",
  gender: "female",
};

// -----------------------------------------------------------------------------

// 타입 추론 (암묵적으로 타입 지정됨)
let aa = 5;
let bb = "hello";
let cc = true;
let dd = null;
let ee;

// aa = '5' // error (Type 'string' is not assignable to type 'number' .)
// bb = 5
// cc = 5
// dd = 5;
ee = 5; // 타입을 지정하지 않고 선언만 한 변수의 경우 any 타입이 자동 지정됨
ee = "abc"; // any 타입을 사용하게 되면 ts를 사용하는 이유 사라짐
