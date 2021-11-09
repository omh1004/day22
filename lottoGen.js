//로또에서 let을 선언할꺼냐? const로 선언할꺼냐
//배열에는 리모컨이 들어간다.
//const를 못바꾼다는건
const arr = []

while(true){
    //숫자 생성(1~45)
    const num  = parseInt(((Math.random()*45)+1))

    console.log(num)
    //검사
    const index = arr.indexOf(num)

    console.log(`num: ${num} INDEX: ${index}`)

    if(index >= 0){
        continue
    }
    const newLength = arr.push(num)
    if(arr.length===6){
        break
    }
}

console.log(arr)