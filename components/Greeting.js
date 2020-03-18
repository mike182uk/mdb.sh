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

  return (
    <span>{sample(greetings)}!</span>
  )
}
