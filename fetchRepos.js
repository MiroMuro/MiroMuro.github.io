async function getMirosPublicRepoData() {
  const miroGithubUrl = "https://api.github.com/users/MiroMuro/repos";
  console.log("Im here");
  try {
    const response = await fetch(miroGithubUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}

getMirosPublicRepoData();
