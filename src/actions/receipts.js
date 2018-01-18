import * as types from './actionTypes'

export const addReceipt = (title, text) => {
  console.log('actions', title, text)
  return {
    type: types.ADD_NEW_RECEIPT,
    text,
    title,
    date: new Date()
  }
}