import styles from './Filter.module.scss';

interface Props{
    setValue : Function,
    values : Array<string>
}

export const Filter : React.FC<Props> = ({setValue, values}) => {
    return(
        <select className={styles.filter} onChange={(e) => {setValue(e.target.value)}}>
            <option key={''} value={''}>All</option>
            {values.map(item => {
                return(
                    <option key={item} value={item}>{item}</option>
                )
            })}
        </select>
    )
}