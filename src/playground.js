const axios = require("axios");

async function doSearch(keyword) {
  const url =
    "https://search.groo.co.il/autocompleteservice/search/1/1?q=" + keyword;

  try {
    const searchRes = await axios.get(url);
    console.log(searchRes);
  } catch (err) {
    console.error(err);
  }
}

doSearch("כיסא");
