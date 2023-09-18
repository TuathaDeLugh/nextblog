import Pagination from '../Pagination/Pagination'
import styles from'./cardlist.module.scss'
import React from 'react'

function CardList() {
  return (
    <div className={styles.container}>
      <Pagination/>
    </div>
  )
}

export default CardList