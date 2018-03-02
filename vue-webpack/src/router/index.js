import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Riders from '@/components/Riders'
import Join from '@/components/Join'
import Videos from '@/components/Videos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
	{
		path: '/riders',
		name: 'Riders',
		component: Riders
	},
	{
		path: '/join',
		name: 'Join',
		component: Join
	},
	{
		path: '/videos',
		name: 'Videos',
		component: Videos
	},
  ]
})
