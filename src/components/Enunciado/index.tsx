import styles from './Enunciado.module.css'

interface EnunciadoProps {
    texto: string
}

export default function Enunciado({ texto }: EnunciadoProps) {
  return (
    <div className={styles.enunciado}>
        <div className={styles.texto}>
            {texto}
        </div>
    </div>
  )
}
