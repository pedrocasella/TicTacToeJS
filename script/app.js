let areas = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

document.getElementById('game-area').addEventListener('click', (e)=>{
    const mySquare = e.target.id
    const squareClickId = areas.indexOf(mySquare)
    console.log(mySquare)
    console.log('position: ' + areas.indexOf(mySquare))
    const selectedSquare = areas[squareClickId]
    const newAreas = areas.splice(squareClickId, 1)
    document.getElementById(selectedSquare).innerHTML = '<span>X</span>' 
})


document.getElementById('squares').addEventListener('click', ()=>{

    setTimeout(()=>{
        console.log(areas.length)
        const random = Math.floor(Math.random() * areas.length)
        const selectedSquare = areas[random]
        const newAreas = areas.splice(random, 1)
        console.log(areas)
        document.getElementById(selectedSquare).innerHTML = '<span>O</span>'
    }, 1000*1)

})