import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages);

  return (
    <div className={"pagination"}>
      {pagesArray &&
        pagesArray.map(p => (
          <span
            key={p}
            onClick={() => {
              changePage(p);
            }}
            className={`pagination__item ${p === page ? "activ" : ""}`}
          >
            {p}
          </span>
        ))}
        
    </div>
  );
};
  
export default Pagination;
