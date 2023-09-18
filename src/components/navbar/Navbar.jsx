import Image from 'next/image'
import styles from'./navbar.module.scss'
import React from 'react'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

function Navbar() {
  return (
    <div className={styles.container}>
    <div className={styles.social}>
      <Image src="/linkedin.png" alt="linkedin" width={30} height={30}/>
      <Image src="/github.png" alt="github" width={30} height={30}/>
      <Image src="/mail.png" alt="mail" width={30} height={30}/>
    </div>
    <div className={styles.logo}>Umang Sailor</div>
    <div className={styles.links}>
      <ThemeToggle/>
      <Link href={'/'}>Home</Link>
      <Link href={'/'}>Contacts</Link>
      <Link href={'/'}>About</Link>
      <AuthLinks/>
    </div>

    </div>
  )
}

export default Navbar