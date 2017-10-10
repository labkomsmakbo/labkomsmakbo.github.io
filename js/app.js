Foo = { template: '<div>foo</div>' }
Bar = { template: '<div>bar</div>' }

routes = [
  { path: '/', component: httpVueLoader('components/home.vue') },
  { path: '/tata-tertib', component: httpVueLoader('components/tata-tertib.vue') },
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
			{ path: '/tata-tertib', text: 'Tata Tertib Labkom', icon: 'error'},
			{ 
				path: '/KelasX', 
				text: 'Kelas X', 
				icon: 'apps',
				model: true, 
				items: [
					{
						path: '/hal1',
						text: 'pertemuan1',
						icon: 'label_outline'
					},
					{
						path: '/hal2',
						text: 'pertemuan2',
						icon: 'label_outline'
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
						icon: 'label_outline'
					},
					{
						path: '/hal2',
						text: 'pertemuan2',
						icon: 'label_outline'
					}
				]
			},
			{ path: '/tim-labkom', text: 'Tim Labkom', icon: 'people' },
		]
	})
}).$mount('#app')