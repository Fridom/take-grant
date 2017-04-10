import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Col, Button, ControlLabel } from 'react-bootstrap'
import SubjectsSelect from '../components/SubjectsSelect'
import ObjectsSelect from '../components/ObjectsSelect'
import Table from '../components/Table'
import NewTable from '../components/NewTable'
import * as TakeGrantActions from '../actions/TakeGrantActions'
import '../styles/bootstrap.css'
import classNames from 'classnames/bind'
import styles from '../styles/TakeGrant.styl'

import Test from '../components/Test'

class App extends Component {
  clean() {
    this.props.takeGrantActions.updateSubjects([]);
  }

  render() {
    let cx = classNames.bind(styles);
    let label = cx('label');
    let t = true
    if (t) {
      return <Test
                styles={cx} />
    } else {
      return <div className='row'>
        <Col md={12}>
          <SubjectsSelect
            styles={cx}
            subjects={this.props.takeGrant.subjects}
            takeGrantActions={this.props.takeGrantActions} />
        </Col>
        <Col md={12}>
          <ObjectsSelect
            styles={cx}
            objects={this.props.takeGrant.objects}
            takeGrantActions={this.props.takeGrantActions}/>
        </Col>
        <Col md={4}>
          <ControlLabel className={label}>Before</ControlLabel>
          <Table
            styles={cx}
            subjects={this.props.takeGrant.subjects}
            objects={this.props.takeGrant.objects}
            takeGrantActions={this.props.takeGrantActions} />
        <Button onClick={::this.clean}>Clean</Button>
        </Col>
        <Col md={4}>
          <ControlLabel className={label}>After</ControlLabel>
          <NewTable
            styles={cx}
            subjects={this.props.takeGrant.subjects}
            newSubjects={this.props.takeGrant.newSubjects}
            objects={this.props.takeGrant.objects}
            takeGrantActions={this.props.takeGrantActions} />
        </Col>
      </div>
    }
  }
}

function mapStateToProps(state) {
  return {
    takeGrant: state.takeGrant
  }
}

function mapDispatchToProps(dispatch) {
  return {
    takeGrantActions: bindActionCreators(TakeGrantActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
