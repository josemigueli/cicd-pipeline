const DeleteButton = ({ deleteTrigger }) => {
    return (
        <>
        <button className='delete-button' type='button' onClick={deleteTrigger}>Delete</button>
        </>
    )
}

export default DeleteButton