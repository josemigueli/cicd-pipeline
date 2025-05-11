const Notifications = ({ message, type }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={type === 'success' ? 'notification success-message' : 'notification error-message'}>
            <p>
                <b>{message}</b>
            </p>
        </div>
    )
}

export default Notifications