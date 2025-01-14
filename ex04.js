// 연산자와 함수, 조건문을 토대로 계산기 함수를 하나 만들어 보려고 합니다.
// 함수에 숫자 , 연산자 , 숫자 세 개의 매개변수를 넣었을 때
// 해당 연산자를 기준으로 연산을 해서 값을 반환하는 함수를 만들어주세요.

// 예시
// function 함수명(매개변수1, 매개변수2, 매개변수3) {
//   // 코드를 작성해주세요.
// }

// 함수명(3, "+", 6); // 결과값 9
// 함수명(11, "-", 6); // 결과값 5
// 함수명(6, "*", 3); // 결과값 18
// 함수명(15, "/", 3); // 결과값 5

const calculator = function (num1, operator, num2) {
  if (operator === "+") {
    return (result = num1 + num2);
  } else if (operator === "-") {
    return (result = num1 - num2);
  } else if (operator === "*") {
    return (result = num1 * num2);
  } else {
    return (result = num1 / num2);
  }

  return result;
};

console.log(calculator(3, "+", 6)); // 결과값 9
console.log(calculator(11, "-", 6)); // 결과값 5
console.log(calculator(6, "*", 3)); // 결과값 18
console.log(calculator(15, "/", 3)); // 결과값 5
