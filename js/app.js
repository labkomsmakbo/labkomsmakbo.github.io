Foo = { template: '<div>foo</div>' }
Bar = { template: '<div>bar</div>' }

routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/here', component: httpVueLoader('js/my-component.vue') }
]

router = new VueRouter({
  routes // short for `routes: routes`
})

app = new Vue({
	el: '#app',
	router,
	data: () => ({
		drawer: true,
	})
}).$mount('#app')