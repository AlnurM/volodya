import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useTelegram } from '@/hooks'
import { db } from '@/firebase'
import styles from './index.module.sass'

const HomePage = () => {
  const { tg, user } = useTelegram()
  const [currentUser, setCurrentUser] = useState(null)

  const getUser = async () => {
    if (!user?.id) {
      return 
    }
    const docSnap = await getDoc(doc(db, 'user', user.id.toString()))
    if (docSnap.exists()) {
      return setCurrentUser(docSnap.data())
    }
  }
  console.log(currentUser)
  const handleRegister = async () => {
    if (!user?.id) {
      return 
    }
    await setDoc(doc(db, 'user', user.id.toString()), {
      ...user
    }).then(res => console.log(res)).catch(e => console.log(e))
  }

  useEffect(() => {
    getUser()
  }, [user?.id])
  return (
    <div className={styles.Root}>
      <button className={styles.Button} onClick={handleRegister}>Регистрация</button>
    </div>
  )
}

export default HomePage
