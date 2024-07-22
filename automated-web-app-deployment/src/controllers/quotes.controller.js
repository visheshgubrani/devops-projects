import quotes from '../quotes/quotes.js'

const getQuotes = (req, res) => {
  return res.status(200).send(quotes)
}

const getRandomQuote = (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return res.status(200).send(randomQuote)
}

const healthCheck = (req, res) => {
  return res.status(200).json({ message: 'The Server is working correctly' })
}
export { getQuotes, getRandomQuote, healthCheck }
