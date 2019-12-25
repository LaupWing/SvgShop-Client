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

const svg = {
    svgCreate: {
        method: 'POST',
        url: `${baseUrl}svg`
    },
    getSvgSingle: {
        method: 'GET',
        url: `${baseUrl}svg/`
    },
    svgsUser:{
        method: 'GET',
        url: `${baseUrl}user/svgs`
    }
}
export default {
    user,
    svg
}