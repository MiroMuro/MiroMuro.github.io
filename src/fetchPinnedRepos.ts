const token: string = import.meta.env.VITE_GITHUB_TOKEN;

async function fetchPinnedReposByMiroMuro() {
  console.log("The token is: ", token);
  console.log("I am here");
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
            viewer {
                pinnedItems(first: 6, types: REPOSITORY) {
                    nodes {
                        ... on Repository{
                            name
                            description
                            primaryLanguage {
                                name
                            }
                        }                                                                    
                    }
                } 
            }       
        }`,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

fetchPinnedReposByMiroMuro();
