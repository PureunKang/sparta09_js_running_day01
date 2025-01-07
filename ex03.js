// 지난 시간에 배웠던 연산자를 활용하여,
// 숫자를 입력하면 홀수인지 짝수인지 판별하는 함수를 만들어 보려고 합니다.
// 다음과 같은 결과값이 나올 수 있도록 코드를 작성해 주세요.

// 예시
// function 함수명(매개변수) {
//   // 코드를 작성해 주세요.
// }

// console.log(함수명(10)); // 결과값 "짝수";
// console.log(함수명(7)); // 결과값 "홀수";

const oddOrEvenChecker = function (number) {
  if (number === 0) {
    return "0";
  } else if (number < 0) {
    return "음수";
  } else if (number % 2 === 0) {
    return "짝수";
  } else {
    return "홀수";
  }
};

console.log(oddOrEvenChecker(10));
console.log(oddOrEvenChecker(7));
console.log(oddOrEvenChecker(-1));
