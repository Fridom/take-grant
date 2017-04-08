import React, { Component } from 'react'
import Table from './Table'


export default class NewTable extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.newSubjects != this.props.newSubjects
  }


  render() {
    if (this.props.newSubjects.length > 0) {
      return <Table
        styles={this.props.styles}
        subjects={this.props.newSubjects}
        objects={this.props.objects}
        takeGrantActions={this.props.takeGrantActions} />
    } else {
      return <div></div>
    }

  }
}
