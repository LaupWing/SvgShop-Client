import cookie from '../../utils/cookie/cookie'


const state = {
    user: null
}

const getters= {
    getUser: state => state.user 
}

const actions= {
    async fetchUser({commit}){
        const cookieExistence = cookie.getCookie('token')
        if(!cookieExistence){
            return // return if cookie doesnt exist
        }
        const userUrl = ''
        const response = await fetch(userUrl)
        commit('setUser', response.data)
    },
    async loginAndSet({commit}){
        
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