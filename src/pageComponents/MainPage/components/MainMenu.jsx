import Image from 'next/image'
import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useTelegram } from '@/hooks'
import { db } from '@/firebase'
import styles from './index.module.sass'

const MainMenu = () => {
  const { user } = useTelegram()
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
  console.log(user?.photo_url)
  console.log(currentUser)
  useEffect(() => {
    getUser()
  }, [user?.id])
  return (
    <div className={styles.Root}>
      <div className={styles.Container}>
        {/* <Image
          src={currentUser.}
          alt="avatar"
          layout="fill" 
          objectFit="cover"
        /> */}
      </div>
      <h2 className={styles.Text}>
        Добро пожаловать, {user?.first_name} {user?.last_name}
      </h2>
    </div>
  )
}

export default MainMenu
