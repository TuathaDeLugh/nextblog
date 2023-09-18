
import Image from 'next/image'
import Link from 'next/link'
import styles from "./homepage.module.scss"
import Fetured from '@/components/fetured/Fetured'
import CategoryList from '@/components/CategoryList/CategoryList'
import CardList from '@/components/cardlist/CardList'
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (
    <div className={styles.container}>
      <Fetured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}
