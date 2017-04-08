import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import Row from './Row'
import _ from 'lodash'


export default class MainTable extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.subjects != this.props.subjects ||
           nextProps.objects != this.props.objects
  }

  combine(sub, obj) {
    let combo = _.cloneDeep(sub);
    let name = combo.name;
    for (let i in obj) {
      if (i == 'name' || i == name) continue
      for (let j in obj[i]) {
        if (obj[i][j] == true) {
          if (!combo[i]) combo[i] = {}
          combo[i][j] = true;
        }
      }
    }
    return combo;
  }

  equal(sub, obj) {
    if (sub.length != obj. length) return false
    for (let i in sub) {
      if (sub[i].length != obj[i].length) return false
      for (let j in sub[i]) {
        if (obj[i][j] && sub[i][j].length != obj[i][j].length ||
            !obj[i][j] ) return false
        for (let k in sub[i][j]) {
          if (obj[i][j] && sub[i][j][k] != obj[i][j][k] ||
              !obj[i][j]) return false
        }
      }
      for (let j in obj[i]) {
        if (sub[i][j] && sub[i][j].length != obj[i][j].length ||
            !sub[i][j] ) return false
        for (let k in obj[i][j]) {
          if (sub[i][j] && sub[i][j][k] != obj[i][j][k] ||
              !sub[i][j]) return false
        }
      }
    }
    return true
  }

  generateNewSubjects(data) {
    let newSubjects = _.cloneDeep(data);
    let subjects = [];
    while (!this.equal(subjects, newSubjects)) {
      subjects = _.cloneDeep(newSubjects);

      for (let id in newSubjects) {

        let name = newSubjects[id].name;

        for (let obj in newSubjects) {
          if (newSubjects[obj].name == name) continue
          if (newSubjects[id][newSubjects[obj].name] && newSubjects[id][newSubjects[obj].name].t == true) {
            newSubjects[id] = this.combine(newSubjects[id], newSubjects[obj]);
            newSubjects[obj] = this.combine(newSubjects[obj], newSubjects[id]);
          }

          if (newSubjects[id][newSubjects[obj].name] && newSubjects[id][newSubjects[obj].name].g == true) {
            newSubjects[obj] = this.combine(newSubjects[obj], newSubjects[id]);
            newSubjects[id] = this.combine(newSubjects[id], newSubjects[obj]);
          }
        }
      }
    }
    this.props.takeGrantActions.updateNewSubjects(newSubjects)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.equal(nextProps.subjects, this.props.subjects)) {
      this.generateNewSubjects(nextProps.subjects);
    }
  }

  renderHeader(e, i) {
    let header = this.props.styles('header');
    return <th className={header} ket={i}>{e.name}</th>
  }

  renderBody() {
    let rows = [];
    const {subjects} = this.props
    for (let i in subjects) {
      rows.push(<Row
          styles={this.props.styles}
          sub={subjects[i]}
          id={i}
          subjects={this.props.subjects}
          objects={this.props.objects}
          takeGrantActions={this.props.takeGrantActions}/>)
    }
    return rows;
  }

  render() {
    let header = this.props.styles('header');
    return <div>
      <Table style={{width: `${(this.props.subjects.length+this.props.objects.length+1)*40}px`}} bordered condensed hover>
        <thead>
          <tr>
            <th className={header}></th>
            {this.props.subjects.map(::this.renderHeader)}
            {this.props.objects.map(::this.renderHeader)}
          </tr>
        </thead>
        <tbody>
          {this.renderBody()}
        </tbody>
      </Table>
    </div>
  }
}
