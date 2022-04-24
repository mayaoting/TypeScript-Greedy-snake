class Snake {
  // 表示蛇的绒
  element: HTMLElement;
  // 表示蛇头的元素
  head: HTMLElement;
  body: HTMLCollection;
  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.body = this.element.getElementsByTagName('div');
  }
  get X() {
    return this.head.offsetLeft
  }

  get Y() {
    return this.head.offsetTop
  }
  set X(value) {
    if(this.X === value) {
      return
    }
    if(this.X < 0 || this.X > 290) {
      throw new Error('蛇撞墙了')
    }
    // 修改X的坐标的时候，是在修改水平方向的坐标，如果是往左走，不能向右掉头，应该继续向左走，反之亦然
    if( this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
      if (value > this.X) {
        // 如果新值value 大于旧值 this.X 本身是向左走，突然点击右走按钮，则应继续向右走
        value = this.X - 10
      } else {
         // 如果新值value 小于旧值 this.X 本身是向右走，突然点击左走按钮，则应继续向右走
        value = this.X + 10
      }
    }
    this.moveBody()
    this.head.style.left = value + 'px';
    this.checkHeadBody()
  }
  set Y(value) {
    if(this.Y === value) {
      return
    }
    if(this.Y < 0 || this.Y > 290) {
      throw new Error('蛇撞墙了')
    }
    // 修改Y的坐标的时候，是在修改垂直方向的坐标，如果是往左走，不能向右掉头，应该继续向左走，反之亦然
    if( this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
      if (value > this.Y) {
        value = this.Y - 10
      } else {
        value = this.Y + 10
      }
    }
    this.moveBody()
    this.head.style.top = value + 'px';
    this.checkHeadBody()
  }
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }
  // 蛇移动身体的方法
  moveBody() {
    /**
     * 将后边的身体设置为前边的身体
     *  例子： 第四节 = 第三节的位置
     *        第三节 = 第二节的位置
     *        第二节 = 蛇头的位置
     */
    for(let i = this.body.length-1; i > 0; i--) {
      let X = (this.body[i-1] as HTMLElement).offsetLeft
      let Y = (this.body[i-1] as HTMLElement).offsetTop 
      const bd = (this.body[i] as HTMLElement)
      bd.style.left = X + 'px';
      bd.style.top = Y + 'px';
    }
  }

  checkHeadBody() {
    for(let i = this.body.length - 1 ; i > 0; i--) {
      const bd = (this.body[i] as HTMLElement)
      if(bd.offsetLeft === this.X && bd.offsetTop === this.Y) {
        throw new Error('撞到自己了！')
      }
    }
  }

}

export default Snake




