// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 왜 그렇게 생각했는지
// 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

// 1.
// let uninitialized;
// console.log(uninitialized);
// 결과값 < undefined >
// 변수 선언되었지만 할당되지 않았으므로 undefined.

// 2.
// < 빈칸 > apple = "사과";
// apple = "바나나"; // TypeError: Assignment to constant variable
// < 빈칸 > = const
// const는 재선언 및 재할당 불가하기 때문에.

// 3.
// let lotto = [3, 8, 13, 19, 21, 32];
// console.log(lotto[3]);
// 결과값 < 빈칸 >
// 19
// array: [3, 8, 13, 19, 21, 32]
// index: 0  1  2   3   4   5

// 4.
// let mySchedule = "";
// console.log(mySchedule || false);
// < 결과값 > false, < 이유 > 빈 문자열은 falsy값이므로, 오른쪽 조건으로 넘어가는데, 오른쪽 false 이므로, 결과값으로 false 반환
//
// console.log(!!mySchedule);
// < 결과값 > false, < 이유 > falsy값에 '!!'붙여주면 false 되니까.
