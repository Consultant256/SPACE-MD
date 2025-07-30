require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAB2M*lo8BmaZYQQAAH0HAAAKAAAAY3JlZHMuanNvbpVU2ZKiSBT9l3zFaFmULaIiBnEBRBAVqWKiH1JIIWUVEhE6*PcOaumuh5meGp6Sm5nnnrzn3PsD5AWu0Rp1QP4BygrfIEHDknQlAjKYNeczqsAIhJBAIAN3ZsVxzvasU2+tu2bhJHyueupgH1qKqDPz3EvYb2yRJJsn8BiBsjmlOPgDIHNzC8Xq1+XEN2vKqXh1w0+cdFnQeaP5jFaY7jKPxsVmP3kCjwER4grn0aKMUYYqmK5Rt4W4+hp90U4VOg71Z+nIuuN93+yROt72+liJFt7BmvfctTtvdyfKjb5Gf85d*UO*4Dof1d5myU0z7dp1t1JnjYt6X2Wu1a5XF2d26pU3+jWOchTqIcoJJt2X605tIsp62W8OjHBf0OKGopwsvgWdWR*dOWUz9m6X5RpxcO5+jbhzrZT7*HLirulacCyc24eX8VQSDc4et7t4t7kyp6avtI0SfSa+rT68kvyfuvMzWhDn6pKnD5bLedIxt8Qb0nopWbRauTpFDXdd5pP7ZfFF2xyi1BfM857fU2YWvDA+ErXVVoJbdtVLN3OaS66kHt38HH+iD0lT*YnlQglvJhbHL8vyqNepUpuJgR3WlUKPRaLrcfalSF6iXMBO4QfteN0snQu9E2yf3Zxc7RJRynn*4ru3zm9JbUHNTmbYeXp9UYI6PQQy8xiBCkW4JhUkuMiHGDuZjgAMb3sUVIi8lhd40XU8Vq9rLMXo4lEOvzYRw9Po3rGZu1l60Htm*OBY9J7+BEagrIoA1TUKNVyTouo2qK5hhGog**19BHJ0J2*CDek4ZgTOuKqJmzdlWsDwQ9WPTRgERZOTfZcH6rBAFZDp32FECM6jeqhjk8MqiPENqTEkNZDPMK3RrxeiCoVAJlWDfnWtWoRD4TljuVSt6QSMQPYqCA6BDNgpL4g8R09EkZY54a*6WzvAwrL8liMCRiCHw2ngKRvFVMAIpK*XpuKUZ1mOmbCsJPHDxSH++EV4wA8RgTitgQxU02T6oJ0tNvvmGjirlbKIFDUa4D4e+OGUNyXunrnKjeZQHCHXF+l529iqThZiNkm4ekoH66SwkiR9MRLn6R9AgAwkyoquXLc8CJPz*V5RklsU4iTSjKQNL84h1NWx6NftzhQ2bazXhzS51c8MWwqni32KL35WwBVd0qc5sZ+XKHEM7aLM26chW4huOECfkwmHdFEG3FHi7TmW9MtxR20n6nEVlze9NSKD5*gtFbf+ir5dvWxb2stV3HXcSg*bhGbCwI3zZm6vqSBvPAiL*HmM4yh68*BrD6Xvswu*umuQbvg9Y*Q6Ct4l+k8p34gPjqMfo08Y78PlXxp0FhzxvexOCb*0iMgbz71wibC52xqNYQl2qKnleu4bhqf6C*B4fB+BMoXkXFQZkEGdnSAYgapoBv*q+bn4QyZV0fXZe+umsCbK75444AzVBGYlkBlhyokSLwjTt1Pbqig1WMdABnnGzU6DvzulLPcEko8OA8rwWaYNHj8BUEsBAhQDFAAACAgAHYz+WjwGZplhBAAAfQcAAAoAAAAAAAAAAAAAAICBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAiQQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
