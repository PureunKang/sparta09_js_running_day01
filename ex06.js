// 아래 코드는 두 명의 유저(유저 A, 유저 B)가 각각 장바구니를 가지고 있다고 가정한 예시입니다.
// B 유저에게 할인 쿠폰을 적용하려고 applyCoupon 함수를 만들었습니다.

function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}

// 유저 A
const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

// 3. (답안) 아래 코드를 추가하여, 아래 함수를 통해 복사한다.
const copyObjectDeep = function (target) {
  if (typeof target === "object" && target !== null) {
    if (Array.isArray(target)) {
      return target.map((item) => copyObjectDeep(item)); // 배열처리
    }
    const result = {};
    for (const prop in target) {
      if (target.hasOwnProperty(prop)) {
        result[prop] = copyObjectDeep(target[prop]); // 재귀적복사
      }
    }
    return result;
  } else {
    return target; // 원시값복사
  }
};

// 유저 B
const userBCart = copyObjectDeep(userACart);
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

console.log(userACart);
console.log(userBCart);

// 1.	실행 결과로 userACart.items와 userBCart.items는 각각 어떻게 달라져 있을까요?
//      userA, userB 모두 각 아이템 가격에서 5000원씩 할일되어있다.

// 2.	1번의 결과에 대한 이유를 설명해보세요.
//      데이터 주소값을 복사해 온 상태에서 함수 적용하여 원시값을 변경하였으므로, 해당 데이터 주소값을 프로퍼티로 갖고 있는
//      userA의 아이템값도 변경된다.
//      (두 유저 모두 동일한 객체를 참조하고 있다. 그러므로 동일한 참조를 공유하고 있는 userAcart.items도 변경된다.)

// 3.	원래 의도대로라면 유저 A와 유저 B 장바구니가 독립적으로 동작해야 하는데,
//      그렇게 하려면 코드를 어떻게 수정해야 할까요?
