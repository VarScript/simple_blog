import Link from "next/link";
import React from "react";
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/varscript/${name}`, {
        next: { revalidate: 60 },
      }
  );
  return await response.json();
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar>
            <span>{repo.stargazers_count}</span>
          </FaStar>
        </div>
        <div className="card-stat">
          <FaCodeBranch>
            <span>{repo.forks_count}</span>
          </FaCodeBranch>
        </div>
        <div className="card-stat">
          <FaEye>
            <span>{repo.watchers_count}</span>
          </FaEye>
        </div>
      </div>
    </>
  );
};

export default Repo;
