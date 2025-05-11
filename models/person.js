const mongoose = require('mongoose')
const config = require('../lib/config')

mongoose.set('strictQuery', false)

const url = config.mongoUrl

console.log('Connecting to MongoDb...')

mongoose
  .connect(url)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: [true, 'Name is required'],
  },
  number: {
    type: String,
    required: [true, 'User phone number required'],
    minLength: 8,
    validate: {
      validator: function (v) {
        return /\d{2}-\d{6}/.test(v) || /\d{3}-\d{5}/.test(v)
      },
      message: (props) => `${props.value} is not a valid phone number`,
    },
  },
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Person', personSchema)
