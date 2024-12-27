export type User = {
  id: number;
  login: string;
  avatar_url?: string;
  url: string;
  repos_url?: string;
}

export type Repo = {
  id: number;
  name: string;
  url: string;
  description: string;
  stargazers_count: number;
  watchers_count: number;
  open_issues_count: number;
}
