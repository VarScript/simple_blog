import Repo from "@app/componets/Repo";
import RepoDirs from "@app/componets/RepoDirs";
import Link from "next/link";
import React, { Suspense } from "react";

const RepoPage = ({ params: { name } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to the Repos
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
