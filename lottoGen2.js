
const arr = []

for (let i = 1; i <= 45; i++) {
    arr.push(i)
}

for ( i = 0; i < 6; i++) {
    const idx = parseInt((Math.random() * arr.length))
    console.log(arr.splice(idx,1))
}