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
        const urlSetup = url.user.userGet
        const response = await fetch(urlSetup.url,{
            method: urlSetup.method,
            headers: new Headers({
                'Authorization': cookieCheck
            })
        })
        const user = await response.json()
        commit('setUser', user)
    },
    async loginAndSet({commit}){
        
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
        }catch(e){
            console.log(e)
        }
    }
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