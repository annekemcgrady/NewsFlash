import { newsAPI_KEY, giphyAPI_KEY } from "./apiKeys";

export const fetchHeadlines = async () => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=${newsAPI_KEY}`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("There was a problem finding articles");
    } else {
      const results = await response.json();
      return results;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchCategoryHeadlines = async category => {
  let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsAPI_KEY}`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("There was a problem finding category articles");
    } else {
      const results = await response.json();
      return results;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchGIF = async search => {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyAPI_KEY}&q=${search}&limit=1&offset=0&rating=PG-13&lang=en`;
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("There was a problem finding gif");
    } else {
      const results = await response.json();
      return results;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
