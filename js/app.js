Foo = { template: '<div>foo</div>' }
Bar = { template: '<div>bar</div>' }

routes = [
  { path: '/', component: httpVueLoader('components/home.vue') },
  { path: '/tata-tertib', component: httpVueLoader('components/tata-tertib.vue') },
  { path: '/pengenalan-erp', component: httpVueLoader('components/pengenalan-erp.vue') },
  { path: '/odoo-erp', component: httpVueLoader('components/odoo-erp.vue') },
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
				path: '/gnu-linux', 
				text: 'GNU/Linux', 
				icon: 'school',
				model: true, 
				items: [
					{
						path: '/pengenalan-gnu-linux',
						text: 'Pengenalan Linux',
						icon: 'label_outline'
					},
					{
						path: '/linux-command-line',
						text: 'Linux Command Line',
						icon: 'label_outline'
					}
				]
			},
			{ 
				path: '/pengenalan-erp', 
				text: 'Enterprise Resource Planning', 
				icon: 'school', 
				items: [
					{
						path: '/pengenalan-erp',
						text: 'Pengenalan ERP',
						icon: 'label_outline'
					},
					{
						path: '/odoo-erp',
						text: 'Odoo ERP',
						icon: 'label_outline'
					}
				]
			},
			{ path: '/tim-labkom', text: 'Tim Labkom', icon: 'people' },
		]
	})
}).$mount('#app')