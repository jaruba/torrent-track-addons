# Torrent Track Addons

Addons for the [Torrent Track](https://torrent-track.surge.sh/) website.

## How to contribute

Edit `search-addons.js` and add a new search addon, then create a Pull Request with the changes, the website updates automatically with the new list.

## Configuration

- `name`: _string_, name of the addon
- `url`: _string_, URL of the addon, can include variables:
- - `%%query%%`: a search query, this is the title and year for movies and only the title for series (examples: 'Game of Thrones', 'Avengers Assemble 2012')
- - `%%type%%`: this is only set if you also configured the `type` property, it's replaced by a URL part that is specific for the type
- - `%%imdb%%`: replaced with the IMDB ID of the media item, these are only replaced if the `useIds` property is set to an array containing it (example: `useIds: ['imdb']`), other internal IDs that can be used: `tmdb`, `tmdbUrl`, `metacritic`, `rt`, `rtUrl`, `imdbUrl`
- `space`:  _string_, different sites use different space types in the URL, applies only to `%%query%%`, can be `+` or `%20`, defaults to `%20`
- `types`: _object_, when set must contain at least one of: `types.movie` / `types.series`, applies only to `%%type%%`, if the media item is a movie, then `%%type%%` is replaced with the string from `types.movie`, if `types.series` is not set, then this addon will not show for series at all
- `useIds`: _array_, used for internal IDs, examples: `%%imdb%%`, `%%metacritic%%`, etc., for example, for `%%imdb%%` to work in a URL, you must also set `useIds: ['imdb']`, if a media item is missing the IMDB ID in this case, the addon will not show for that item
- `alphanumeric`: _boolean_, removes all non-alphanumeric (except space) characters from `%%query%%`, default is `false`
- `noQuotes`: _boolean_, removes all single and double quotes from `%%query%%`, default is `false`
