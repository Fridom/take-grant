import React, { Component } from 'react'
import { FormControl, InputGroup, Button, FormGroup, ControlLabel } from 'react-bootstrap'

export default class SubjectsSelect extends Component {
  plusClick() {
    this.props.takeGrantActions.addSubject();
  }

  minusClick() {
    this.props.takeGrantActions.deleteSubject();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.subjects != this.props.subjects ||
           nextProps.objects != this.props.objects
  }

  render() {
    const {styles} = this.props
    let label = styles('label')
    let pmButton = styles('pmButton')
    let subjectsInput = styles('subjectsInput')
    let subjectsForm = styles('subjectsForm')
    return <div>
    <ControlLabel className={label}>Subjects</ControlLabel>
      <FormGroup className={subjectsForm}>
        <InputGroup>
          <InputGroup.Button>
            <Button onClick={::this.minusClick} className={pmButton}>-</Button>
          </InputGroup.Button>
          <FormControl disabled className={subjectsInput} value={this.props.subjects.length} type="text" />
          <InputGroup.Button>
            <Button className={pmButton} onClick={::this.plusClick}>+</Button>
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </div>
  }
}
