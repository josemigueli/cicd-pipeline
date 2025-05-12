/* eslint-disable no-undef */
require('dotenv').config()

const required = (name) => {
  const value = process.env[name]
  if (value === undefined) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

const config = {
  port: process.env.PORT || 3001,
  mongoUrl: required('MONGODB_URI'),
  nodeEnv: process.env.NODE_ENV,
  testMongoUrl: required('TEST_MONGODB_URI'),
}

module.exports = config
