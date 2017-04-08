import { ADD_SUBJECT, DELETE_SUBJECT, ADD_OBJECT,
         DELETE_OBJECT, UPDATE_SUBJECTS, UPDATE_NEW_SUBJECTS } from '../constants/TakeGrant'

export function addSubject() {
  return {
    type: ADD_SUBJECT
  }
}

export function deleteSubject() {
  return {
    type: DELETE_SUBJECT
  }
}
export function addObject() {
  return {
    type: ADD_OBJECT
  }
}

export function deleteObject() {
  return {
    type: DELETE_OBJECT
  }
}

export function updateSubjects(data) {
  return {
    type: UPDATE_SUBJECTS,
    payload: data
  }
}

export function updateNewSubjects(data) {
  return {
    type: UPDATE_NEW_SUBJECTS,
    payload: data
  }
}
