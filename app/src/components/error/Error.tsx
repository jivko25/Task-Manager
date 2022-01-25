import styles from './Error.module.scss';

interface Props{
    message : string
}

export const Error: React.FC<Props> = ({message}) => {
    return(
        <div className={styles.wrapper}>
            <h3>{message}</h3>
        </div>
    )
}