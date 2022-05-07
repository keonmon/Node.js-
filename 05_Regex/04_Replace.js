// 04_Replace.js

// replace 함수를 이용하여 패턴으로 매칭된 텍스트를 지정한 텍스트로 치환할 수 있습니다.
let a = 'blue sock and red shocks';

b = a.replace(/blue|white|red/g, 'color');
console.log(b); // color sock and color shocks


a= 'park 010-1234-5678 , kim 010-8888-9999 , lee 010-1111-2222 ';

// 정규표현식과 replace를 이용하여 전화번호 뒷자리를 모두 마스킹(*로 치환)해주세요.
b = a.replace(/[-]\d{4}\s/g, '-****');
console.log(b)  // park 010-1234-****, kim 010-8888-****, lee 010-1111-****


a= '네이버 - http://www.naver.com , 다음 - http://www.daum.net , 네이트 - http://www.nate.com';

// 위 문자열에서 http를 모두 https로 치환하여 출력
b = a.replace(/\bhttp(?=:)/g, 'https');
console.log(b)  // 네이버 - https://www.naver.com , 다음 - https://www.daum.net , 네이트 - https://www.nate.com