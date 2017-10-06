Foo = { template: '<div>foo</div>' }
Bar = { template: '<div>bar</div>' }

routes = [
  { path: '/', component: httpVueLoader('components/home.vue') },
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/here', component: httpVueLoader('components/my-component.vue') }
]

router = new VueRouter({
  routes // short for `routes: routes`
})

app = new Vue({
	el: '#app',
	router,
	data: () => ({
		dialog: false,
		drawer: true,
		items: [
			{ path: '/', text: 'Home', icon: 'home'},
			{ path: '/tata-tertib', text: 'Tata Tertib Labkom', icon: 'apps'},
			{ 
				path: '/KelasX', 
				text: 'Kelas X', 
				icon: 'apps',
				model: true, 
				items: [
					{
						path: '/hal1',
						text: 'pertemuan1',
						icon: 'apps'
					},
					{
						path: '/hal2',
						text: 'pertemuan2',
						icon: 'apps'
					}
				]
			},
			{ 
				path: '/KelasXI', 
				text: 'Kelas XI', 
				icon: 'apps', 
				items: [
					{
						path: '/hal1',
						text: 'pertemuan1',
						icon: 'apps'
					},
					{
						path: '/hal2',
						text: 'pertemuan2',
						icon: 'apps'
					}
				]
			},
			{ path: '/tim-labkom', text: 'Tim Labkom SMAKBO', icon: 'apps' },
		]
	})
}).$mount('#app')