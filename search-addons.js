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
    name: 'ThePirateBay',
    url: 'https://thepiratebay.org/search.php?q=%%imdb%%&video=on&search=Pirate+Search&page=0&orderby=',
    useIds: ['imdb'],
  },
  {
    name: 'FilePursuit',
    url: 'https://filepursuit.com/pursuit?q=%%query%%&type=video',
    alphanumeric: true,
    space: '+'
  },
  {
    name: 'Open Directories',
    url: 'https://www.google.com/search?q=intext%3A%22%%query%%%22+intitle%3A%22index.of%22+%2B%28wmv%7Cmpg%7Cavi%7Cmp4%7Cmkv%7Cmov%29+-inurl%3A%28jsp%7Cpl%7Cphp%7Chtml%7Caspx%7Chtm%7Ccf%7Cshtml%29',
    alphanumeric: true,
    space: '+'
  },
  {
    name: 'JustWatch',
    url: 'https://www.themoviedb.org%%tmdbUrl%%/watch',
    useIds: ['tmdbUrl']
  },
  {
    name: 'IMDB',
    url: 'https://www.imdb.com/title/%%imdb%%/',
    useIds: ['imdb']
  },
  {
    name: 'Metacritic',
    url: 'https://www.metacritic.com%%metacritic%%',
    useIds: ['metacritic']
  },
  {
    name: 'Rotten Tomatoes',
    url: 'https://www.rottentomatoes.com%%rtUrl%%',
    useIds: ['rtUrl']
  },
  {
    name: 'TMDB',
    url: 'https://www.themoviedb.org%%tmdbUrl%%',
    useIds: ['tmdbUrl']
  },
  {
    name: 'Stremio',
    url: 'https://web.stremio.com/#/detail/%%type%%/%%imdb%%',
    useIds: ['imdb'],
    types: {
      movie: 'movie',
      series: 'series',
    }
  },
  {
    name: 'DMM',
    url: 'https://debridmediamanager.com/%%type%%/%%imdb%%',
    useIds: ['imdb'],
    types: {
      movie: 'movie',
      series: 'show',
    }
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/results?search_query=%%query%%&+trailer',
    space: '+'
  },  
  {
    name: 'Wikipedia',
    url: 'https://en.wikipedia.org/w/index.php?search=%%query%%&title=Special%3ASearch&go=Go&ns0=1',
    space: '+'
  },
  {
    name: 'Google',
    url: 'http://www.google.com/search?q=%%query%%',
    space: '+'
  }
]
