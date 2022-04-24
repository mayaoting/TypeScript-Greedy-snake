class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById('food')!
  }

  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }
  change() {
    /**
     * 食物可移动的位置最小为0,最大为290
     * 食物的宽度和高度各为10， 因此移动的距离应该是10的倍数
     */
    let left = Math.round(Math.random() * 29) * 10
    let top = Math.round(Math.random() * 29) * 10
    this.element.style.left = left + 'px'
    this.element.style.top = top + 'px'
  }
}

export default Food