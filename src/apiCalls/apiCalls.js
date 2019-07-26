
export const fetchHeadlines = ()=> {

  const newsAPI_KEY = '1776f561eb7c41d78d0a4429b21a677c'
  var url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${newsAPI_KEY}`
  
  return fetch(url)
      .then(response => response.json())
      .catch(error => error.message)
  }
  
  export const fetchCategoryHeadlines = (category)=> {
  
    const newsAPI_KEY = '1776f561eb7c41d78d0a4429b21a677c'
    var url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsAPI_KEY}`
  
    return fetch(url)
        .then(response => response.json())
        .catch(error => error.message)
    }
  
    export const fetchGIF = (search) => {
  
    const giphyAPI_KEY = '4MhijkFyDvm8ayfBUWxmOOUICCzgrbAK';
    var url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI_KEY}&q=${search}&limit=1&offset=0&rating=PG-13&lang=en`
  
    return fetch(url)
        .then(response => response.json())
        .catch(error => error.message)
    }