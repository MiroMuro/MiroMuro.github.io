const token = process.env.VITE_GITHUB_TOKEN;
fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
    Authorization: `bearer ${token}`,
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    query: `{
              viewer {
                  pinnedItems(first: 6, types: REPOSITORY){
                      nodes{
                          ... on Repository{
                              name
                              description
                              primaryLanguage{
                                  name
                              }
                              url
                              }
                          }
                      }
                  }
              }`,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    return data;
  });
