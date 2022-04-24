import Snake from "./Snake"
import Food from "./Foods"
import ScorePanel from "./ScorePanel"

class GameControl {
  // 定义三个属性
  snake: Snake
  food: Food
  scorePanle: ScorePanel
  direction: string = 'ArrowUp'
  isLive = true;
  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanle = new ScorePanel(10,1)
    this.init()
  }
  // 游戏的初始化方法，调用即开始
  init() {
    document.addEventListener('keydown', this.keyDownHandler.bind(this))
    
  }
  // 创建一个键盘按下的响应函数
  keyDownHandler(event: KeyboardEvent) {
     /*
    *   ArrowUp  Up
        ArrowDown Down
        ArrowLeft Left
        ArrowRight Right
    * */
    this.direction = event.key
    this.run()
  }

  run() {
    let X = this.snake.X
    let Y = this.snake.Y
    switch (this.direction) {
      case 'ArrowUp':
        Y -= 10
        break;
      case 'ArrowDown':
        Y += 10
        break;
      case 'ArrowLeft':
        X -= 10
        break;
      case 'ArrowRight':
        X += 10
        break;
    };
    
    // 检查蛇是否吃到了食物
    this.checkEat(X, Y);
    
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (err: unknown) {
      const e = err as ErrorEvent
      alert(e.message+" GAME OVER!")
      this.isLive = false
    }

    this.isLive && setTimeout(() => {
      this.run.bind(this)
    }, 300 * (this.scorePanle.level - 1) * 30);
  }

  checkEat(X: number, Y: number) {
    if(X === this.food.X && Y === this.food.Y) {
      this.food.change()
      this.snake.addBody()
      this.scorePanle.addScore()
    }
  }
}

export default GameControl