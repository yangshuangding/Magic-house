// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store({
    state: {
        dqcity: {
            name: '北京',
            value:'AREA|88cff55c-aaa4-e2e0'
        }
    },
    mutations: {
        clickCity (state,city) {
            state.dqcity.name = city.name
            state.dqcity.value = city.value
        }
    }
})

// 导出仓库
export default store
