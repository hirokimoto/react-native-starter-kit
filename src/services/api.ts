import apisauce from 'apisauce'
import { isNil } from 'ramda'
import * as qs from 'query-string'

const authenticated = payload => {
  if (isNil(payload)) payload = {}
  payload.AUTH_KEY = 'ffaf4b736f342c3c3aace3d86fb72341'
  return qs.stringify(payload)
}

const create = (baseURL = 'https://www.net-networking.com/mobile_api/') => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    // 10 second timeout...
    timeout: 10000,
  })

  const loginByEmail = payload => api.post('user_login', authenticated(payload))
  const getChallengeToken = payload => api.post('get_challenge_token', authenticated(payload))
  const getProfiles = payload => api.post('show_users_with_phone', authenticated(payload))
  const usernameAvailable = payload => api.post('is_name_available', authenticated(payload))
  const signup = payload => api.post('create_user', authenticated(payload))

  return {
    loginByEmail,
    getChallengeToken,
    getProfiles,
    usernameAvailable,
    signup,
  }
}

export default {
  create,
}
