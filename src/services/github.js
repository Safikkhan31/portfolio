
const baseURL = "https://api.github.com";

export async function getLanguages(username, repo) {
    return await fetch(`${baseURL}/repos/${username}/${repo}/languages`)
        .then(res => res.json())
        .catch(err => {throw new Error("Failed to fetch languages")});
}