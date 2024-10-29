interface GitHubGraphQlResponse {
  data: {
    viewer: {
      pinnedItems: {
        nodes: [Repository];
      };
    };
  };
}

interface Repository {
  name: string;
  description: string;
  primaryLanguage: {
    name: string;
  };
  url: string;
}

export type { GitHubGraphQlResponse, Repository };
