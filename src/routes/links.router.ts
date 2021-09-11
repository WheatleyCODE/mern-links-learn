import {Router} from 'express'
import Links from '../models/Links'
import shortid from 'shortid'
import config from 'config'
import auth from '../midleware/auth.midleware'


const router = Router()

router.post('/generate', auth, async (req, res) => {
  try {
    const baseUrl = config.get('baseUrl')
    const { from } = req.body
    const code = shortid.generate()
    const exis = await Links.findOne({ from })

    if (exis) {
      res.status(200).json({ link: exis })
      return
    }

    const to = baseUrl + '/t/' + code
    const link = new Links({
      from, to, code, owner: req.user.userId
    })
    await link.save()

    res.status(201).json({ link })
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так попробуйте снова :)' })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    // Получить jwt token и проверить на валидность
    const links = await Links.find({ owner: req.user.userId }) // ?? Теперь у нас есть такое поле
    // ! После добавления мидваре
    res.json(links)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так попробуйте снова :)' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const link = await Links.findById(req.params.id) // ??
    res.json(link)
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так попробуйте снова :)' })
  }
})

export default router
