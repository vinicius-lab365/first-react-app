import styles from './styles.module.css'

function Button({ value }) {
    return(
        <button className={styles.btn}>{ value }</button>
    );
}

export default Button;