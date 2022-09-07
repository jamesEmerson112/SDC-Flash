// Create a copy and rename file to config.js
// on the gitignore list
// add your API tok

module.exports = {
  config: {
    baseURL: "https://app-hrsei-api.herokuapp.com/api/fec2/rfp",
    headers: {
      authorization: API_Token,
    },
  },
};
