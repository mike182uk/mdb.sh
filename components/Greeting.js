import { useEffect, useState } from 'react'
const sample = require('lodash/sample')

export default function Greeting () {
  const greetings = [
    'Aloha',
    'Ciao',
    'Halló',
    'Hei',
    'Hej',
    'Hello',
    'Hey',
    'Howdy',
    'Olá'
  ]

  const [greeting, setGreeting] = useState('Hey')

  useEffect(() => setGreeting(sample(greetings)), [])

  return (
    <span>{greeting}!</span>
  )
}
