import url from '../../utils/urls/urls'
import cookie from 'js-cookie'

const state = {
    allSvg: [],
    userSvgs: []
}

const getters= {
    getUserSvgs: state => state.userSvgs
}

const actions= {
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
            console.log(e)
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
    
}

export default {
    state,
    getters,
    actions,
    mutations
}