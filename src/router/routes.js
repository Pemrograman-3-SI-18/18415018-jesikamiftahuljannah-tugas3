
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/DataBuku.vue') },
      { path: 'InputDataBuku', component: () => import('pages/home/InputDataBuku.vue') },
      { path: 'DataTransaksi', component: () => import('pages/home/DataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/loginregislayout.vue'),
    children: [
      { path: 'outh/Login', component: () => import('pages/users/Login.vue') },
      { path: 'outh/Registrasi', component: () => import('pages/users/Registrasi.vue') },
      { path: 'outh/DataTransaksi', component: () => import('pages/home/DataTransaksi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
