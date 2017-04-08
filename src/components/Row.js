import React, { Component } from 'react'
import Cell from './Cell'


export default class Row extends Component {

  renderRows() {
    let cells = []
    const {sub, subjects, objects} = this.props;
    for (let i in subjects) {
       cells.push(
         <Cell
            id={this.props.id}
            subjects={this.props.subjects}
            obj={subjects[i].name}
            takeGrantActions={this.props.takeGrantActions}
            styles={this.props.styles}
            rules={sub[subjects[i].name] ? sub[subjects[i].name] : {}}/>
      )
    }
    for (let i in objects) {
      cells.push(
        <Cell
          id={this.props.id}
          subjects={this.props.subjects}
          obj={objects[i].name}
          takeGrantActions={this.props.takeGrantActions}
          styles={this.props.styles}
          rules={sub[objects[i].name] ? sub[objects[i].name] : {}}/>
     )
    }
    return cells;
  }

  render() {
    let header = this.props.styles('header');
    return <tr>
      <th className={header}>{this.props.sub.name}</th>
      {this.renderRows()}
    </tr>
  }
}
