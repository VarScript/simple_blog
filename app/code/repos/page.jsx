import React from "react";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
import Link from "next/link";

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/varscript/repos", {
    next: { revalidate: 60 },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return await response.json();
}

const ReposPage = async () => {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <div className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar>{repo.startgazers_count}</FaStar>
                </span>
                <span>
                  <FaCodeBranch>{repo.forks_count}</FaCodeBranch>
                </span>
                <span>
                  <FaEye>{repo.watchers_count}</FaEye>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ReposPage;
