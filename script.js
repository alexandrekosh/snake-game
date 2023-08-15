let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d");

const size = 30

const snake = [
    {x: 0, y: 0},
]

let direction, loopId;

const drawSnake = () => {
    ctx.fillStyle = "#e8e8e8";
    
    snake.forEach((position, index) => {
        
        const head = snake.length -1

        if(index == head) {
            ctx.fillStyle = "red";
        }

        ctx.fillRect(position.x, position.y, size, size)
    })
}

const moveSnake = () => {
    if(!direction) return

    const head = snake[snake.length -1]

    snake.shift()

    if(direction == "ArrowRight") {
        snake.push( {x: head.x + 30, y: head.y} )
    }

    if(direction == "ArrowLeft") {
        snake.push( {x: head.x - 30, y: head.y} )
    }

    if(direction == "ArrowDown") {
        snake.push( {x: head.x, y: head.y + 30} )
    }

    if(direction == "ArrowUp") {
        snake.push( {x: head.x, y: head.y - 30} )
    }
}

const gameLoop = () => {
    clearInterval(loopId) 

    ctx.clearRect(0, 0, 600, 600)

    moveSnake()
    drawSnake()

    loopId = setTimeout(() => {
        gameLoop()
    }, 100)
}

gameLoop()

document.addEventListener("keydown", ({key}) => {
    if(key == "ArrowRight" && direction != "ArrowLeft") {
        direction = "ArrowRight"
    }
    
    if(key == "ArrowLeft" && direction != "ArrowRight") {
        direction = "ArrowLeft"
    }

    if(key == "ArrowDown" && direction != "ArrowUp") {
        direction = "ArrowDown"
    }

    if(key == "ArrowUp" && direction != "ArrowDown") {
        direction = "ArrowUp"
    }
})

let btn = document.querySelectorAll('button')

btn[0].addEventListener('click', () => {
    direction = "ArrowUp"
})

btn[1].addEventListener('click', () => {
    direction = "ArrowLeft"
})

btn[2].addEventListener('click', () => {
    direction = "ArrowDown"
})

btn[3].addEventListener('click', () => {
    direction = "ArrowRight"
})
