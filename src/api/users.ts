import { axios, bareAxios } from "../config/axiosInstance";
import { Repo, User } from "../types/user";
import { MAX_REPOS_SHOWN, MAX_USERS_SHOWN } from "../config/settings";

type UserResponse = {
  items: User[];
}

type RepoResponse = Repo[]

export const searchForUser = async (value: string) => {
  try {
    const data = await axios.get<UserResponse>(
      `search/users?per_page=${MAX_USERS_SHOWN}&q=${value}`
    )

    return data.data.items;
  } catch (error) {
    throw error;
  }
};

export const searchForRepos = async (reposUrl?: string) => {
  try {
    if (!reposUrl) {
      return []
    }

    const data = await bareAxios.get<RepoResponse>(
      `${reposUrl}?per_page=${MAX_REPOS_SHOWN}`,
    )

    return data.data.map<Repo>((repo) => ({
      id: repo.id,
      name: repo.name,
      url: repo.url,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
      watchers_count: repo.watchers_count,
      open_issues_count: repo.open_issues_count,
    }));
  } catch (error) {
    throw error;
  }
}
