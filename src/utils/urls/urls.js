const baseUrl = 'http://localhost:3000/' 

const user = {
    userCreate: {
        method: 'POST',
        url: `${baseUrl}user`
    },
    userGet: {
        method: 'GET',
        url: `${baseUrl}user`
    },
    userSignup: '',
}
export default {
    user
}