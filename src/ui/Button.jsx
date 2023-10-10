function Button({ children, type, onClick }) {

    const base = 'rounded-full bg-white text-md font-semibold text-stone-800 hover:bg-slate-100 hover:transition-colors duration-500 focus:outline-none focus:ring  focus:ring-black disabled:cursor-not-allowed focus:ring-offset-1 focus:ring-opacity-75'

    const styles = {
        primary: base + ' px-4 py-2 md:px-5 md:py-3 text-lg',
        icon: base 
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
