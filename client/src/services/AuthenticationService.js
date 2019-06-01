import Api from '@/services/Api'
// basically importing the Axios object services/Api.js

// export an object that has a register method
export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// eg how to call the register method from another file
// sample will use app js on server for register endpoint
//
// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })
