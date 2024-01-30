import { useState } from 'react'
import clsx from 'clsx'
import styles from './index.module.sass'

import { MainMenu, InfoMenu } from './components'

const content = {
  0: <MainMenu />,
  1: <InfoMenu />
}
const MainPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={styles.Root}>
      <div className={styles.Content}>
        {content[activeTab]}
      </div>
      <div className={styles.Menu}>
        <button 
          className={clsx(styles.Button, {
            [styles.ButtonActive]: activeTab === 0
          })}
          onClick={() => setActiveTab(0)}
        >
          Главная
        </button>
        <button 
          className={clsx(styles.Button, {
            [styles.ButtonActive]: activeTab === 1
          })}
          onClick={() => setActiveTab(1)}
        >
          Инфо
        </button>
      </div>
    </div>
  )
}

export default MainPage
