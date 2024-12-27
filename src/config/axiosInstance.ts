import defaultAxios from 'axios';

export const axios = defaultAxios.create({
  baseURL: "https://api.github.com/",
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'Authorization': `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
    'Accept': 'application/vnd.github+json',
  }
})

export const bareAxios = defaultAxios.create({
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
    'Authorization': `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
    'Accept': 'application/vnd.github+json',
  }
})
