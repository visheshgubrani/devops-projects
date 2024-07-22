import quotes from "../quotes/quotes.js"

const getQuotes = (req, res) => {
  return res.status(200).send(quotes)
}

const getRandomQuote = (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return res.status(200).send(randomQuote)
}

export { getQuotes, getRandomQuote }
