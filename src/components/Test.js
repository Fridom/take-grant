import React, { Component } from 'react'

// let counter = 1;

let mouseX;
let mouseY;
let mouseDown = false;
let selected = false;

document.onmousemove = function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
};

document.onmousedown = function(e) {
  mouseDown = true;
  console.log(e)
}

document.onmouseup = function() {
  mouseDown = false;
}

export default class Test extends Component {

  move() {
    if (mouseDown && selected) {
      this.circle.style.left = `${mouseX - 80}px`;
      this.circle.style.top = `${mouseY - 65}px`;
    }
  }

  down() {
    selected = true;
  }

  up() {
    selected = false;
  }

  render() {
    const { styles } = this.props;
    let circle = styles('circle')
    let field = styles('field')
    return <div className={field} onMouseMove={::this.move}>
      <div className={circle} onMouseDown={::this.down} onMouseUp={::this.up} ref={(ref)=>{this['circle'] = ref}}>
      </div>
    </div>
  }
}
