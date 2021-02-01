import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
    <div className={styles.title}> 
      Homepage
      <p className={styles.text}>ofkjnasofdnsdf</p>
      <p className={styles.text}>ofkjnasofdnsdf</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja listing</a></Link>
      </div>
    </>
  )
}
