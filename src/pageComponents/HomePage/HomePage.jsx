import { doc, setDoc } from 'firebase/firestore'
import { useTelegram } from '@/hooks'
import { db } from '@/firebase'
import styles from './index.module.sass'

const HomePage = () => {
  const { tg, user } = useTelegram()

  const handleRegister = async () => {
    if (!user) {
      return 
    }
    await setDoc(doc(db, 'user', user.id), user)
  }
  console.log(tg)
  return (
    <div className={styles.Root}>
      <button className={styles.Button} onClick={handleRegister}>Регистрация</button>
    </div>
  )
}

export default HomePage
