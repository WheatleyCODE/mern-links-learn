import {Router} from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User'
import {check, validationResult} from 'express-validator'
import jwt from 'jsonwebtoken'
import config from 'config'

const router = Router()

// api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длинна пароля 6 символов').isLength({ min: 6 })
  ],
  async (req, res) => {
  try {
    console.log(req.body)
    // Валидация входящий параметров
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      })
    }

    const { email, password } = req.body // Получаем данные с клиента
    const condidate = await User.findOne({ email: email }) // Ищем в базе даннго пользователя

    // Если нашли пользователя
    if (condidate) {
      return res.status(400).json({ message: 'Такой пользователь уже существует' })
    }

    const hashedPassword = await bcrypt.hash(password, 13)
    const user = new User({ email, password: hashedPassword })

    await user.save()

    res.status(201).json({ message: 'Пользователь создан' })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так попробуйте снова :)' })
  }
})

router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
  ],
  async (req, res) => {
  try {
    // Валидация входящий параметров
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректные данные при регистрации'
      })
    }

    const { email, password } = req.body

    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }

    const isMatch = await bcrypt.compare(password, (await user).password)

    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный пароль' })
    }

    console.log('Three')

    const token = jwt.sign(
      { userId: (await user).id },
      config.get('jwtSecret'),
      { expiresIn: '1h' }
    )

    console.log('Fore')

    res.json({ token, userId: (await user).id })


  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Что-то пошло не так попробуйте снова :)' })
  }
})

export default router
