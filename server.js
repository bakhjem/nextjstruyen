const fastify = require('fastify')({ logger: { level: 'error' } })
const Next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

fastify.register((fastify, opts, next) => {
    const app = Next({ dev })
    app
        .prepare()
        .then(() => {
            if (dev) {
                fastify.get('/_next/*', (req, reply) => {
                    return app.handleRequest(req.req, reply.res).then(() => {
                        reply.sent = true
                    })
                })
            }

            fastify.get('/truyen/:id', (req, reply) => {
                const actualPage = '/truyen/[id]'
                const queryParams = { id: req.params.id }
                return app.render(req.req, reply.res, actualPage, queryParams).then(() => {
                    reply.sent = true
                })
            })
            fastify.get('/doc/:id/:chapter', (req, reply) => {
                const actualPage = '/doc/[id]/[chapter]'
                const queryParams = { id: req.params.id, chapter: req.params.chapter }
                return app.render(req.req, reply.res, actualPage, queryParams).then(() => {
                    reply.sent = true
                })
            })
            fastify.get('/update/:page', (req, reply) => {
                const actualPage = '/update/[page]'
                const queryParams = { page: req.params.page }
                return app.render(req.req, reply.res, actualPage, queryParams).then(() => {
                    reply.sent = true
                })
            })
            fastify.get('/complete/:page', (req, reply) => {
                const actualPage = '/complete/[page]'
                const queryParams = { page: req.params.page }
                return app.render(req.req, reply.res, actualPage, queryParams).then(() => {
                    reply.sent = true
                })
            })
            fastify.get('/hot/:page', (req, reply) => {
                const actualPage = '/hot/[page]'
                const queryParams = { page: req.params.page }
                return app.render(req.req, reply.res, actualPage, queryParams).then(() => {
                    reply.sent = true
                })
            })
            fastify.get('/search/:id/:page', (req, reply) => {
                const actualPage = '/search/[id]/[page]'
                const queryParams = { id: req.params.id, page: req.params.page }
                return app.render(req.req, reply.res, actualPage, queryParams).then(() => {
                    reply.sent = true
                })
            })
            fastify.get('/theloai/:id/:page', (req, reply) => {
                const actualPage = '/theloai/[id]/[page]'
                const queryParams = { id: req.params.id, page: req.params.page }
                return app.render(req.req, reply.res, actualPage, queryParams).then(() => {
                    reply.sent = true
                })
            })


            fastify.get('/*', (req, reply) => {
                return app.handleRequest(req.req, reply.res).then(() => {
                    reply.sent = true
                })
            })

            fastify.setNotFoundHandler((request, reply) => {
                return app.render404(request.req, reply.res).then(() => {
                    reply.sent = true
                })
            })

            next()
        })
        .catch(err => next(err))
})

fastify.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
})