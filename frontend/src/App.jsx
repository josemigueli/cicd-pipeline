import { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import Notifications from './components/Notifications'

const App = () => {
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState([])
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  })
  const {name, number} = formData
  const updateValue = (event) => setFormData({ ...formData, [event.target.name]: event.target.value})

  const addNewRegister = (event) => {
    event.preventDefault()

    //This prevents the user from entering an empty name or number
    if (name.replace(/\s/g, '').length < 1 || number.replace(/\s/g, '').length < 1) {
      return alert(`Please, fill out all fields `)
    }

    const newObject = {
      name: name,
      number: number,
      /**
       * json-server v1.0.0-alpha.23 generates a random string as id and not a number
       * https://github.com/typicode/json-server?tab=readme-ov-file#notable-differences-with-v017
       */
    }

    const getPerson = persons.find(person => person.name === name)
    if (getPerson) {
      if (!window.confirm(`${name} is already added to the phonebook, replace the current number with this new one?`)) {
        return
      }
      personService
      .update(getPerson.id, newObject)
      .then(updatedPerson => {
        if (updatedPerson === null) {
          const filteredPersons = persons.filter(p => p.id !== getPerson.id)
          setPersons(filteredPersons)
          setPersonsToShow(filteredPersons)
          setFormData({
            name: '',
            number: ''
          })
          displayErrorNotification(`Information of ${getPerson.name} has already been removed from server`)
          return
        }
        const updatedPersons = persons.map(p => p.id !== getPerson.id ? p : updatedPerson)
        setPersons(updatedPersons)
        setPersonsToShow(updatedPersons)
        setFormData({
          name: '',
          number: ''
        })
        displaySuccessNotification(`Updated ${updatedPerson.name}`)
      })
      .catch(error => {
        displayErrorNotification(error.response.data.error)
      })
      return
    }

    personService
    .create(newObject)
    .then(createdObject => {
      const personsUpdated = persons.concat(createdObject)
      setPersons(personsUpdated)
      setPersonsToShow(personsUpdated)
      setFormData({
        name: '',
        number: ''
      })
      displaySuccessNotification(`Added ${createdObject.name}`)
    })
    .catch(error => {
      displayErrorNotification(error.response.data.error)
    })
  }

  const filterPersons = (event) => {
    const term = event.target.value
    const result = persons.filter(person => person.name.toString().toLowerCase().includes(term.toLowerCase()))
    
    if (result.length >=1 && term.length >= 1) {
      setPersonsToShow(result)
    } else {
      setPersonsToShow(persons)
    }
  }

  const deleteRegister = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
        personService
        .deletePerson(id)
        .then(deleted => {
          if (deleted === 204) {
            const filteredPersons = persons.filter(p => p.id !== id)
            setPersons(filteredPersons)
            setPersonsToShow(filteredPersons)
            displaySuccessNotification(`Deleted ${name}`)
          }
        })
    }
  }

  const displaySuccessNotification = (message) => {
    setSuccessMessage(message)
    setTimeout(() => {
      setSuccessMessage(null)
    }, 3000)
  }

  const displayErrorNotification = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  useEffect(() => {
    personService
    .getAll()
    .then(allPersons => {
      setPersons(allPersons)
      setPersonsToShow(allPersons)
    })
  }, [])

  return (
    <div>

      <h1>Phonebook</h1>
      <Notifications message={successMessage} type={'success'}/>
      <Notifications message={errorMessage} type={'error'}/>

      <Filter filterPersons={filterPersons}/>

      <h2>Add a new</h2>
      <PersonForm
        addNewRegister={addNewRegister}
        updateValue={updateValue}
        name={name}
        number={number}
      />

      <h2>Numbers</h2>
      <Numbers 
        personsToShow={personsToShow}
        deleteRegister={deleteRegister}
      />

    </div>
  )
}

export default App
