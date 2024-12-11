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
  } catch (e) {
    console.error(e);
  }
}

function appendPinnedReposToArticle(githubResponseData: GitHubGraphQlResponse) {
  let pinnedRepos: Repository[] =
    githubResponseData.data.viewer.pinnedItems.nodes;

  let projectDivArray: Element[] = getAllProjectDivs();

  if (projectDivArray.length === 0) {
    console.error("No project divs found");
    return;
  }

  pinnedRepos.forEach((repo, index) => {
    let projectDiv = projectDivArray[index];
    projectDiv.innerHTML = `   
                    <div class="project-name-and-desc-container">
                      <header class="project-name" >${repo.name}</header>
                      <p class="project-description" >${repo.description}</p>
                      <a href=${repo.url} class="project-github-button-container">
                    <button class="github-button" >
                      <img src="img/github.png" />
                    </button>
                    </div>
                  </a>         
    `;
  });
}

function getAllProjectDivs(): Element[] {
  let projectsGrid = getProjectsGridElement();

  if (!projectsGrid) {
    return [];
  }

  let projectDivArray: Element[] = [];

  for (const child of projectsGrid.children) {
    projectDivArray.push(child);
  }
  return projectDivArray;
}

function getProjectsGridElement(): HTMLElement | null {
  const projectsGrid: HTMLElement | null =
    document.getElementById("projects-grid");

  if (!projectsGrid) {
    console.error("No projects-grid element found");
    return null;
  }

  return projectsGrid;
}

fetchPinnedReposByMiroMuro();
