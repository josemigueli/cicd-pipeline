import DeleteButton from './DeleteButton'

const Numbers = ({ personsToShow, deleteRegister }) => {
    return (
        <>
        {personsToShow.map(person =>
        <p key={person.id}>
            {person.name} {person.number}
            <DeleteButton 
                deleteTrigger={() => deleteRegister(person.id, person.name)} 
            /> 
        </p>
        )}
        </>
    )
}

export default Numbers