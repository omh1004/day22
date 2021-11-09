//const가 고정하는건 내용이 아니라 리모컨을 고정한다.
//자바의 경우는 처음정한 정한 배열의 길이 만큼을 넘어가면 , 에러가 나는데,
//자바스크립트에서는 접근이 가능하다.
//undefined 변수는 존재하는데, 거기에 값이 들어가지 않은상태
//자바스크립트는 자료구조고 발달되지않았다.
//자바스크립트는 배열의 길이가 고정되어 있지 않다.

const arr = [`타노스`,`아이언맨`,`블랙위도우`]

console.log(arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

//맨 마지막에 추가
//push를 이용하면 변경된 배열의 길이가 나온다.
const cahngedLength  = arr.push(`블랙팬서`)

//index of 에서 없는 것을 찾으면 -1 을 준다.
//함수형의 경우는 잘못된경우에 나올수 없는 값을 던져준다.
console.log(arr.indexOf(`캡틴 아메리카`))
//배열을 추가할떄 push를 사용할수있다.
//splice로 배열의 항목을 제거

console.log(arr)

arr.splice(1,1)

console.log(arr)

for (let i = 0; i < arr.length ; i++) {
        if(arr[i]===`블랙위도우`) {
            break
        }
        console.log(i)
        console.log(arr[i])
}


console.log("-------------------------------")
//break는 아래로 빠지는것, continue는 위로 빠지는 것이다.
for (let i = 0; i <arr.length ; i++) {
    if(arr[i]=== `블랙위도우`) {
        continue
    }
    console.log(i)
    console.log(arr[i])
}
console.log("-------------------------------")


