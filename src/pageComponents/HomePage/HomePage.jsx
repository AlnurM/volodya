import { useTelegram } from '@/hooks'
import styles from './index.module.sass'

const HomePage = () => {
  const { tg, user } = useTelegram()

  console.log(tg)
  console.log(user)
  return (
    <div className={styles.Root}>
      <button className={styles.Button}>Регистрация</button>
    </div>
  )
}

export default HomePage
