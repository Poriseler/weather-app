function Button({ children, type, onClick }) {

    const base = 'rounded-full bg-green-100 text-md font-semibold text-stone-800 hover:bg-green-200 hover:transition-colors duration-500 focus:outline-none focus:ring  focus:ring-green-500 disabled:cursor-not-allowed focus:ring-offset-1 focus:ring-opacity-75'

    const styles = {
        primary: base + ' px-4 py-2 md:px-5 md:py-3 text-lg'
    }

    if (onClick) {
        return (
            <button onClick={onClick} className={styles[type]}>{ children }</button>
        )
    }

    return (
        <button className={styles[type]}>
            { children }
        </button>
    )
}

export default Button
