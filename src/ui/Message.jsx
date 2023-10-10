function Message({children}) {
    const base = 'text-center text-2xl md:text-3xl'

    return (
        <div className={base}>
            {children}
        </div>
    )
}

export default Message
