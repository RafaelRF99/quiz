import styles from '../styles/Resultado.module.css'

import { useRouter } from "next/router"

export default function Resultado() {
  const router = useRouter()

  const total = router.query.total ? +router.query.total : 0
  const certas = router.query.certas ? +router.query.certas : 0
  const percentual = Math.round((certas / total) * 100)

  return (
    <div className={styles.resultado}>
        <h1>Resultado</h1>
        <div>Total: {total}</div>
        <div>Certas: {certas}</div>
        <div>{`${percentual}%`}</div>
    </div>
  )
}
