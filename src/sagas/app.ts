import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import AppActions from '../actions/app'

export function* loginRequest(api, action) {
  const { payload } = action
  const response = yield api.loginByEmail(payload)
  console.log('$$$$$$$$$$:   ', response)
  // if (response.ok) {
  //   yield put(AppActions.loginSuccess())
  // } else {
  //   yield put(AppActions.loginFailure())
  // }
}
