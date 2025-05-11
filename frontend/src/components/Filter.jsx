const Filter = ({ filterPersons }) => {
    return (
        <>
        <div>
            Filter shown with: <input placeholder='Search...' onChange={(event) => filterPersons(event)} />
        </div>
        </>
    )
}

export default Filter