const Pagination = ({ page, lastPage, setPage }: any) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((prev: number) => prev - 1);
    scrollTop();
  };
  const handleNextPage = () => {
    setPage((next: number) => next + 1);
    scrollTop();
  };

  return (
    <div className="p-4 text-textDark dark:text-textLight flex justify-center">
      <div className="text-sm md:text-md font-semibold flex">
        {page <= 1 ? null : (
          <button onClick={handlePrevPage} className="pr-2 flex items-center">
            prev
          </button>
        )}
        <p className=" flex items-center">
          {page} Of {lastPage}
        </p>
        {page >= lastPage ? null : (
          <button onClick={handleNextPage} className="pl-2 flex items-center">
            next
          </button>
        )}
      </div>
    </div>
  );
};
export default Pagination;
