

const r1 = 10
const r2 = 20

const rn1 = Math.pow(r1,2)*Math.PI
const rn2 = Math.pow(r2,2)*Math.PI


let gap = rn1-rn2.toFixed(2)



// if , 삼항연산자

//if(gap < 0){
//    gap= gap * -1
//}
//삼항연산자
gap = gap < 0? gap * -1 : gap
gap = gap.toFixed(2)

console.log(`이 도형의 넓이는 ${gap} 입니다.`)



