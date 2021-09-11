import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import path from 'path'
import routes from './routes'

const app = express()

app.use(express.json())

app.use('/api/auth', routes.auth)
app.use('/api/links', routes.links)
app.use('/t', routes.redirect)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT: number = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'))
    app.listen(5000, () => {
      console.log(`App has been started on port ${PORT}...`)
    })
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}


start()
