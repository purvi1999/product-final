import { useState } from "react";
import { useSelector } from "react-redux";

const usePagination = (itemsPerPage,todos) => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(todos.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1), totalPage);
  };
  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1), totalPage);
  };

  const jumpToPage = (page) => {
    if (page > 0 && page <= totalPage) {
      setCurrentPage(page);
    }
  };

  const currentItems = todos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return { nextPage, prevPage, jumpToPage, currentItems,totalPage,page:currentPage };
};

export default usePagination;
