class ScorePanel {
  score = 0
  level = 1
  scoreElem: HTMLElement
  levelElem: HTMLElement
  //  设置一个变量限制等级的最大值
  maxLevel: number

  // 设置一个变量表示多少分时升级
  upScore: number

  constructor(maxLevel: number = 10, upScore : number = 10) {
    this.scoreElem = document.getElementById('score')!
    this.levelElem = document.getElementById('level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore() {
    this.scoreElem.innerHTML = ++this.score + ''
    if(this.score % this.upScore === 0) {
      this.upLevel()
    }
  }

  upLevel() {
    if(this.level < this.maxLevel) {
      this.levelElem.innerHTML = ++ this.level + ''
    }
  }
}

export default ScorePanel