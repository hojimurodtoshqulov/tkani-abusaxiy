import styles from "./button.module.scss";

export default function Button({ btnTitle }) {
    return (
        <>
            <button className={styles.button}>
                {btnTitle}
            </button>
        </>
    )
}