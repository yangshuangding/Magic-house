import HkTable from '@/views/HkTable.vue'
import LookFor from '@/views/LookFor.vue'
import HkIndex from '@/views/HkIndex.vue'
import HkInformation from '@/views/HkInformation.vue'
import DetailPage from '@/views/DetailPage.vue'
import HkMine from '@/views/HkMine.vue'
import HkLogin from '@/views/HkLogin.vue'
import HkRegister from '@/views/HkRegister.vue'
import HkIndexBar from '@/views/HkIndexBar.vue'
import MyCollect from '@/views/MyCollect.vue'
import MyLet from '@/views/MyLet.vue'
import BaiduMap from '@/views/BaiduMap.vue'
import MyRelease from '@/views/MyRelease.vue'
import MySearch from '@/views/MySearch.vue'
const routes = [
  {
    path: '/hktable',
    component: HkTable,
    children: [
      {
        path: '/search',
        name: 'search',
        component: LookFor
      },
      {
        path: '/home',
        name: 'home',
        component: HkIndex
      },
      {
        path: '/friends',
        component: HkInformation
      },
      {
        path: '/setting',
        component: HkMine
      }
    ]
  },
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/detali',
    name: 'detali',
    component: DetailPage
  },
  {
    path: '/hklogin',
    name: 'hklogin',
    component: HkLogin
  },
  {
    path: '/hkregister',
    name: 'hkregister',
    component: HkRegister
  },
  {
    path: '/hkindexbar',
    name: 'hkindexbar',
    component: HkIndexBar
  },
  {
    path: '/mycollect',
    name: 'mycollect',
    component: MyCollect
  },
  {
    path: '/mylet',
    name: 'mylet',
    component: MyLet
  },
  {
    path: '/baidumap',
    name: 'baidumap',
    component: BaiduMap
  },
  {
    path: '/myrelease',
    name: 'myrelease',
    component: MyRelease
  },
  {
    path: '/mysearch',
    name: 'mysearch',
    component: MySearch
  }
]

export default routes
