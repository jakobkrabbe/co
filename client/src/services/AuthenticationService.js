import Api from './Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//   email: 'test@me.com',
//   password: '123123'
// })
