const PersonForm = ({ addNewRegister, updateValue, name, number }) => {
    return (
        <>
        <form onSubmit={addNewRegister}>
            <div>
                name: <input value={name} name='name' onChange={updateValue} />
            </div>
            <div>
                number: <input value={number} name='number' onChange={updateValue} />
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
        </>
    )
}

export default PersonForm