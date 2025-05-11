# Phonebook

This project is part of the **Full Stack Open** course offered by the University of Helsinki. It is developed for **Part 2** of the course and focuses on building a simple phonebook application that allows users to add, search, update, and delete contacts. The application uses a local JSON server to simulate a backend.

## Overview

The phonebook application allows users to manage a list of contacts. Users can add new contacts, search for existing ones, update their information, and delete entries. The application also provides notifications for successful or failed operations.

## Features

- **Add Contacts**: Users can add new contacts by entering a name and phone number.
- **Search Contacts**: Users can filter the list of contacts by typing in a search term.
- **Update Contacts**: If a contact already exists, users can update their phone number.
- **Delete Contacts**: Users can delete contacts from the phonebook.
- **Notifications**: Success and error messages are displayed for user actions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **JSON Server**: A local server used to simulate a backend for storing contact data.
- **Vite**: A fast build tool for modern web development.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/josemigueli/fso-part2.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fso-part2/phonebook
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON server (in a separate terminal):
   ```bash
   npx json-server --watch db.json --port 3001
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run preview`**: Previews the production build locally.

## Data Structure

The contact data is stored in a `db.json` file with the following structure:

```json
{
  "persons": [
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": "1"
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": "2"
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": "3"
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": "4"
    }
  ]
}
```

## License

This project is licensed under the MIT License.
