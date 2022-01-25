import styles from './Task.module.scss'

interface Props{
    id : string
    title : string;
    description: string;
    assignee : string;
    status: string
}

export const Task: React.FC<Props> = ({id, title, description, assignee, status}) => {
    return(
        <div className={styles.wrapper}>
            <h4>Title:&ensp;{title}</h4>
            <h4>Description:&ensp;{description}</h4>
            <h4>Assignee:&ensp;{assignee}</h4>
            {status == 'In Progress' &&
            <h1 className={styles.leftArrow}>&lArr;</h1>
            }
            {status == 'In Progress' || status == 'To Do' &&
            <h1 className={styles.rightArrow}>&rArr;</h1>
            }
        </div>
    )
}