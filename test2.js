
//1ft 3.48
//1피트당 3.5달러
// 300 * 200
//항상 성공하는것을 먼저 짠 후에, 고친다.
// 창문 => 가로*2, 세로*2 => 전체 샷시 길이
//require가 자바로 말하면 import로 보면된다.
const readLine = require(`readLine-sync`)

console.log(`1피트당 가격이 얼마입니까?`)

//readLine 자동으로 int 형으로 인식해준다.
const perFeet = parseFloat(readLine.prompt())
//try catch를 사용해도 에러가 없이 뜰수있는건 지원하는 함수에서
//에러 처리를 해주니까 , catch로 안뜬다.

console.log(`가로길이는 얼마인가요?`)
const width = parseInt(readLine.prompt())
console.log(`가로길이는 얼마인가요?`)
const height =parseInt(readLine.prompt())

//연산
const tatalLength = ((width*2) + (height * 2))

//길이(cm) => ft
const totalFeet = Math.ceil(tatalLength / 30.48)

console.log(totalFeet)

// 가격계산
const totalPay = totalFeet * perFeet

console.log(`총 가격은 ${totalPay} 달러 입니다.`)
