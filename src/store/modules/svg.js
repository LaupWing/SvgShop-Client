import url from '../../utils/urls/urls'
import cookie from 'js-cookie'

const state = {
    allSvg: [],
    userSvgs: [],
    singleSvg: null,
    error: null
}

const getters= {
    getUserSvgs: state => state.userSvgs,
    getClickedSvg: state => state.singleSvg,
}

const actions= {
    async getSingleSvg({commit}, id){
        const urlSetup = url.svg.getSvgSingle
        try{
            const response = await fetch(`${urlSetup.url}${id}`,{
                method: urlSetup.method,
                mode: 'cors'
            })
            const json = await response.json()
            commit('setSingleSvg', json)
        }catch(e){
            commit('setError', e)
        }
    },
    async saveSvgToDB({commit}, svgInfo){
        const bodyObj = JSON.stringify(svgInfo)
        const urlSetup = url.svg.svgCreate
        const token = cookie.get('token')
        
        try{
            const response = await fetch(urlSetup.url,{
                method: urlSetup.method,
                body: bodyObj,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                mode: 'cors'
            }) 
            const json = await response.json()
            commit('setSvgList')

        }catch(e){
            commit('setError', e)
        }
    },
    async getUserSvgsFromDB({commit}){
        const token = cookie.get('token')
        const urlSetup = url.svg.svgsUser
        try{
            const response = await fetch(urlSetup.url,{
                method: urlSetup.method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                mode: 'cors'
            }) 
            const json = await response.json()

            commit('setUserSvgs', json)

        }catch(e){
            console.log(e)
        }
    }
}

const mutations= {
    setSvgList: (state,svg)=> state.allSvg.push(svg),
    setUserSvgs: (state,svgs)=> (state.userSvgs = svgs),
    setSingleSvg: (state,svg)=> (state.singleSvg = svg),
    setError: (state,e)=> (state.error = e.message),
    
}

export default {
    state,
    getters,
    actions,
    mutations
}