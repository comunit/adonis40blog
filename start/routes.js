'use strict'

const Route = use('Route')

Route.on('/').render('home')

Route.get('/posts', 'PostController.index')

Route.get('/posts/add', 'PostController.add')

Route.get('/posts/edit/:id', 'PostController.edit')

Route.get('/posts/:id', 'PostController.details')

Route.post('/posts', 'PostController.store')

Route.put('/posts/:id', 'PostController.update')

Route.delete('/posts/:id', 'PostController.destroy')
