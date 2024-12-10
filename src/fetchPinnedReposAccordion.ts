import { GitHubGraphQlResponse, Repository } from "./interfaces";

const token: string = import.meta.env.VITE_GITHUB_TOKEN;
async function fetchPinnedReposByMiroMuro() {
  try {
    const response = await fetch("https://api.github.com/graphql", {
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
    });

    const data: GitHubGraphQlResponse = await response.json();
    console.log("Data: ", data);
    appendPinnedReposToAccordion(data);
  } catch (e) {
    console.error(e);
  }
}

function appendPinnedReposToAccordion(
  githubResponseData: GitHubGraphQlResponse
) {
  let pinnedRepos: Repository[] =
    githubResponseData.data.viewer.pinnedItems.nodes;

  let projectAccordionList: NodeListOf<Element> | null =
    getProjectsAccordionElement();

  if (!projectAccordionList) {
    console.error("No project accordion list found");
    return;
  }

  pinnedRepos.forEach((repo, index) => {
    let projectAccordion = projectAccordionList[index];
    projectAccordion.innerHTML = `
                    
                    <div class="accordion-text-wrapper">
                    <header class="accordion-project-header">${repo.name}</header>
                    <p class="accordion-project-description">${repo.description}</p>
                  </div>
                  <button class="expand-button tl">Expand</button>
                    `;
  });
}

function getProjectsAccordionElement(): NodeListOf<Element> | null {
  let accordionProjectDivs = document.querySelectorAll(
    ".accordion-project"
  ) as NodeListOf<Element>;
  console.log("Accordion project divs: ", accordionProjectDivs);
  return accordionProjectDivs;
}
fetchPinnedReposByMiroMuro();
