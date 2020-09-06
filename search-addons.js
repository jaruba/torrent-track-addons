module.exports = [
  {
    name: '1337x',
    url: 'https://1337x.to/category-search/%%query%%/%%type%%/1/',
    space: '%20',
    types: {
      movie: 'Movies',
      series: 'TV',
    }
  },
  {
    name: 'RARBG',
    url: 'https://rarbgp2p.org/torrents.php?category=%%type%%&search=%%query%%&order=seeders&by=DESC',
    space: '+',
    types: {
      movie: '14;48;17;44;45;47;50;51;52;42;46;54',
      series: '18;41;49',
    }
  },
  {
    name: 'ThePirateBay',
    url: 'https://thepiratebay.org/search.php?q=%%query%%&video=on&search=Pirate+Search&page=0&orderby=',
    space: '+'       
  },
  {
    name: 'Google',
    url: 'http://www.google.com/search?q=%%query%%',
    space: '+'
  },
  {
    name: 'JustWatch',
    url: 'https://www.themoviedb.org%%tmdbUrl%%/watch',
    useIds: ['tmdbUrl']
  }
]
