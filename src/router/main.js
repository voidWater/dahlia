import janView from '@/modules/jan/view'
import janCx from '@/modules/jan/cx'
import janMain from '@/modules/jan/main'

import mainOrigin from '@/modules/template-origin/main'
import index from '@/modules/template-origin/index'
import login from '@/modules/template-origin/login'
import t1 from '@/modules/template-origin/template/t1'
import t2 from '@/modules/template-origin/template/t2'
import t3 from '@/modules/template-origin/template/t3'
let routes = [
		{
			path: '/login',
			component: login
		},
		{
			path: '/cx',
			component: janCx,
      meta: {
        title: '促销活动'
      }
		},
		{
		    path: '/mainOrigin',
		    name: 'mainOrigin',
		    component: mainOrigin,
		    meta: {},
				children:[
					{
						path: 'janMain',
						component: janMain,
						children:[
							{
								path: 'view',
								component: janView
							},
						]
					},
					{
						path: 'index',
						component: index
					},
					{
						path: 'view',
						component: janView
					},
					{
						path: 't1',
						component: t1
					},
					{
						path: 't2',
						component: t2
					},
					{
						path: 't3',
						component: t3
					}
				]
		},
		// {
		//     path: '/janMain',
		//     name: 'janMain',
		//     component: janMain,
		//     meta: {},
		// 	children:[
		// 		{
		// 		  path: 'view',
		// 		  component: janView
		// 		},
		// 	]
		// },
		{
		    path: '/cx/:id',
		    name: 'janCx',
		    component: janCx,
		    meta: {
		    	title: '修改昵称'
		    }
		}
	];

export default routes;
