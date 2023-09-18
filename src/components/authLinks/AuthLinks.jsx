import React from 'react'
import styles from "./authLinks.module.scss"
import Link from 'next/link'


function AuthLinks() {
  const status = "notauth"
  return <>
    {status==='notauth' ? (<Link href='/'>Login</Link>) : (<Link href='/write'>Write</Link>) }
  </>
}

export default AuthLinks