import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useTelegram } from '@/hooks'
import { db } from '@/firebase'
import styles from './index.module.sass'

const HomePage = () => {
  const { user } = useTelegram()
  const router = useRouter()

  const getUser = async () => {
    if (!user?.id) {
      return 
    }
    const docSnap = await getDoc(doc(db, 'user', user.id.toString()))
    if (docSnap.exists()) {
      return docSnap.data()
    }
  }

  const handleRegister = async () => {
    if (!user?.id) {
      return 
    }
    await setDoc(doc(db, 'user', user.id.toString()), {
      ...user
    }).then(() => router.push('/main')).catch(e => console.log(e))
  }

  useEffect(() => {
    getUser().then(res => {
      if (res.id) {
        router.push('/main')
      }
    })
  }, [user?.id])
  return (
    <div className={styles.Root}>
      <button className={styles.Button} onClick={handleRegister}>Регистрация</button>
    </div>
  )
}

export default HomePage
