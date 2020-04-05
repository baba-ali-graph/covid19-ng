import React from "react";

export default function References({ references }) {
  return (
    <div className="references-container">
      <h2> Sources </h2>
      <ol>
        <li>
          This
          <a href="https://guardian.ng/news/nigeria-confirms-first-case-of-coronavirus/">
            {" "}
            article{" "}
          </a>{" "}
          gives the date of the first confirmed case in nigeria
        </li>

        <li> Real-time update is provided by this <a href='https://covid-19.mathdro.id/api'> API </a>.
        </li>
      </ol>
    </div>
  );
}
