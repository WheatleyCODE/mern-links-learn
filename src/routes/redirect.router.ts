import {Router} from 'express'
import Links from '../models/Links'

const router = Router()

router.get('/:code', async (req, res) => {
  console.log('object')
  try {
    const link = await Links.findOne({ code: req.params.code }) 

    if (link) {
      link.clicks++

      await link.save()

      return res.redirect(link.from)
    }

    res.status(404).json('Links is not fined')
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так попробуйте снова :)' })
  }
})

export default router