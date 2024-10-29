import { GitHubGraphQlResponse, Repository } from "./interfaces";

const token: string = import.meta.env.VITE_GITHUB_TOKEN;

async function fetchPinnedReposByMiroMuro() {
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
                            url
                        }                                                                    
                    }
                } 
            }       
        }`,
      }),
    });

    const data: GitHubGraphQlResponse = await response.json();
    appendPinnedReposToArticle(data);
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

function appendPinnedReposToArticle(githubResponseData: GitHubGraphQlResponse) {
  let pinnedRepos: Repository[] =
    githubResponseData.data.viewer.pinnedItems.nodes;

  console.log("The pinned repos in console: ", pinnedRepos);

  let projectDivArray: Element[] = getAllProjectDivs();

  pinnedRepos.forEach((repo, index) => {
    let projectDiv = projectDivArray[index];
    projectDiv.innerHTML = `   
                    <a class="project-link" href=${repo.url}>
                      <h4 class="project-title" >${repo.name}</h4>
                      <main class="project-description" >${repo.description}</main>
                    </a>          
    `;
  });
}

function getAllProjectDivs(): Element[] {
  let projectsArticle = getProjectsArticleElement();

  if (!projectsArticle) {
    return [];
  }

  let projectDivArray: Element[] = [];

  for (const child of projectsArticle!.children) {
    projectDivArray.push(child);
  }
  return projectDivArray;
}

function getProjectsArticleElement(): HTMLElement | null {
  const projectsArticle: HTMLElement | null =
    document.getElementById("projects-article");

  if (!projectsArticle) {
    console.error("No projects-article element found");
    return null;
  }

  return projectsArticle;
}

fetchPinnedReposByMiroMuro();
