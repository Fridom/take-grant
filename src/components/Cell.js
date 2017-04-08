import React, { Component } from 'react'
import { Popover, OverlayTrigger, Checkbox } from 'react-bootstrap'
import _ from 'lodash'

export default class Cell extends Component {

  changeRule(e) {
    const {id, obj} = this.props;
    let subjects = _.cloneDeep(this.props.subjects);
    if (!subjects[id][obj]) subjects[id][obj] = {};
    subjects[id][obj][e.currentTarget.offsetParent.firstChild.innerText.toLowerCase()] = e.currentTarget.checked;
    this.props.takeGrantActions.updateSubjects(subjects);
  }

  render() {
    let cell = this.props.styles('cell')
    const {rules} = this.props;
    let string = '';
    for (let i in rules) {
      if (rules[i]) string += i;
    }
    const popover = (
      <Popover id="popover-positioned-right" title="Select rules">
        <Checkbox onChange={::this.changeRule} defaultChecked={rules.r}>r</Checkbox>
        <Checkbox onChange={::this.changeRule} defaultChecked={rules.w}>w</Checkbox>
        <Checkbox onChange={::this.changeRule} defaultChecked={rules.x}>x</Checkbox>
        <Checkbox onChange={::this.changeRule} defaultChecked={rules.t}>t</Checkbox>
        <Checkbox onChange={::this.changeRule} defaultChecked={rules.g}>g</Checkbox>
      </Popover>
    )
    return <td className={cell}>
        <OverlayTrigger rootClose  trigger="click" placement="right" overlay={popover}>
          <div className={cell}>{string}</div>
        </OverlayTrigger>
      </td>
  }
}
