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
    //console.log("Data: ", data);
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
    //console.log("Project accordion: ", projectAccordion.classList[1]);
    projectAccordion.innerHTML = `
                    <div class="accordion-text-wrapper">
                    <header class="accordion-project-header">${repo.name}</header>
                    <p class="accordion-project-description">${repo.description}</p>
                  </div>
                  <button class="expand-button ${projectAccordion.classList[1]}">Expand</button>
                    `;
  });
  openClose();
}

function getProjectsAccordionElement(): NodeListOf<Element> | null {
  let accordionProjectDivs = document.querySelectorAll(
    ".accordion-project"
  ) as NodeListOf<Element>;
  //console.log("Accordion project divs: ", accordionProjectDivs);
  return accordionProjectDivs;
}

let accordionProjectDivs = document.querySelectorAll(
  ".accordion-project"
) as NodeListOf<Element>;

//Eli sitten jokais
const openClose = () => {
  console.log("OPen close");
  console.log("Accordion project divs: ", accordionProjectDivs);

  for (let div of accordionProjectDivs) {
    for (let childElement of div.children) {
      if (childElement.tagName === "BUTTON") {
        childElement.addEventListener("click", () => {
          console.log("Div: ", div);
          let querySelector = "." + div.classList[1];
          console.log("Queryselector ", querySelector);
          var element = document.querySelector(querySelector);
          console.log("Element: ", element);
          element?.classList.toggle("open");
        });
      }
    }
  }
};

fetchPinnedReposByMiroMuro();
