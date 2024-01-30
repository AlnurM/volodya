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
    await setDoc(doc(db, 'user', user.id.toString()), {
      ...user
    }).then(res => console.log(res)).catch(e => console.log(e))
  }
  return (
    <div className={styles.Root}>
      <button className={styles.Button} onClick={handleRegister}>Регистрация</button>
    </div>
  )
}

export default HomePage
