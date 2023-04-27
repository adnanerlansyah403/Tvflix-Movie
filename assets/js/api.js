'use strict';

const api_key = '999ec8ee95d5eb48b8302291c472159d';
const imageBaseUrl = 'https://image.tmdb.org/t/p/';

/**
 * fetch data from a server using the `url` and passes
 * the result in JSON data to a `callback` function,
 * along with an optional parameter if has `optionalParameters`
 */

const fetchDataFromServer = function(url, callback, optionalParameters) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParameters));
}

export { imageBaseUrl, api_key, fetchDataFromServer };