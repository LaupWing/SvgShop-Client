import cookie from 'js-cookie'
import url from '../../utils/urls/urls'

const state = {
    user: null
}

const getters= {
    getUser: state => state.user 
}

const actions= {
    async fetchUser({commit}){
        const cookieCheck = cookie.get('token')
        if(!cookieCheck){
            return // return if cookie doesnt exist
        }
        console.log(cookieCheck)
        try{
            const urlSetup = url.user.userGet
            const response = await fetch(urlSetup.url,{
                method: urlSetup.method,
                headers: new Headers({
                    'Authorization': cookieCheck
                })
            })
            const user = await response.json()
            commit('setUser', user)
        }catch(e){
            console.log(e)
            commit('setUser', null)
        }
    },
    async logoutUser({commit}){
        const urlSetup = url.user.userLogout
        try{
            const cookieCheck = cookie.get('token')
            console.log(cookieCheck)
            const response = await fetch(urlSetup.url,{
                method: urlSetup.method,
                headers: new Headers({
                    'Authorization': cookieCheck
                })
            })
            const user = await response.json()
            cookie.remove('token')
            console.log('loggin out user')
            commit('setUser', null)
            return user
        }
        catch(e){
            console.log(e)
        }
    },
    async loginUser({commit}, userInfo){
        const urlSetup = url.user.userLogin
        const bodyObj = JSON.stringify(userInfo)
        try{
            const response = await fetch(urlSetup.url,{
                method: urlSetup.method,
                body: bodyObj,
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            })
            const json = await response.json()
            console.log(json)
            cookie.set('token', json.token, {expires:(10*365)})
            commit('setUser', json)
        }catch(e){
            console.log(e)
        }
    },
    async signupAndSet({commit}, userInfo){
        const bodyObj = JSON.stringify(userInfo)
        const urlSetup = url.user.userCreate
        try{
            const response = await fetch(urlSetup.url,{
                method: urlSetup.method,
                body: bodyObj,
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors'
            }) 
            const json = await response.json()
            cookie.set('token', json.token, {expires:(10*365)})
            commit('setUser', json)
        }catch(e){
            console.log(e)
        }
    },
}

const mutations= {
    setUser: (state,user)=>(state.user = user)
}

export default {
    state,
    getters,
    actions,
    mutations
}