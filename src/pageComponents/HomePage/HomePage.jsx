import { doc, setDoc } from 'firebase/firestore'
import { useTelegram } from '@/hooks'
import { db } from '@/firebase'
import styles from './index.module.sass'

const HomePage = () => {
  const { tg, user } = useTelegram()

  const handleRegister = async () => {
    if (!user?.id) {
      return 
    }
    await setDoc(doc(db, 'user', user.id), {
      ...user
    })
  }
  console.log(tg)
  return (
    <div className={styles.Root}>
      <span style={{ color: 'white' }}>{user?.id || 'nothing'}</span>
      <button className={styles.Button} onClick={handleRegister}>Регистрация</button>
    </div>
  )
}

export default HomePage
