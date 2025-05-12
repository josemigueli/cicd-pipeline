const PersonForm = ({ addNewRegister, updateValue, name, number }) => {
    return (
        <>
        <form onSubmit={addNewRegister}>
            <div>
                name: <input id='name' value={name} name='name' onChange={updateValue} />
            </div>
            <div>
                number: <input id='number' value={number} name='number' onChange={updateValue} />
            </div>
            <div>
                <button id='add-number' type='submit'>Add</button>
            </div>
        </form>
        </>
    )
}

export default PersonForm