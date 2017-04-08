import { ADD_SUBJECT, DELETE_SUBJECT, ADD_OBJECT,
         DELETE_OBJECT, UPDATE_SUBJECTS, UPDATE_NEW_SUBJECTS } from '../constants/TakeGrant'
import _ from 'lodash'

const initialState = {
  subjects: [{
    name: 'S1'
  }],
  objects: [{
    name: 'O1'
  }],
  newSubjects: []
}

export default function takeGrant(state = initialState, action) {

  switch (action.type) {
    case ADD_SUBJECT:
      let data = _.cloneDeep(state.subjects)
      data.push({name: `S${data.length + 1}`})
      return { ...state, subjects: data }
    case DELETE_SUBJECT:
      data = _.cloneDeep(state.subjects)
      data.pop()
      return { ...state, subjects: data }
    case ADD_OBJECT:
      data = _.cloneDeep(state.objects)
      data.push({name: `O${data.length + 1}`})
      return { ...state, objects: data }
    case DELETE_OBJECT:
      data = _.cloneDeep(state.objects)
      data.pop()
      return { ...state, objects: data }
    case UPDATE_SUBJECTS:
      return { ...state, subjects: action.payload }
    case UPDATE_NEW_SUBJECTS:
      return { ...state, newSubjects: action.payload }

    default:
      return state;
  }

}
