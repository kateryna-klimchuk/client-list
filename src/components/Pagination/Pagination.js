import style from "./Pagination.module.css";
const Pagination = ({ page, onSizeChange, onPageChange }) => {
  return (
    <div className={style.container}>
      {page === 1 ? (
        <button type="button" id="decrement" onClick={onPageChange} disabled>
          Previous
        </button>
      ) : (
        <button
          className={style.paginationButton}
          type="button"
          id="decrement"
          onClick={onPageChange}
        >
          Previous
        </button>
      )}

      <button
        className={style.paginationButton}
        type="button"
        id="increment"
        onClick={onPageChange}
      >
        Next
      </button>
      <select name="page" id="number" onChange={onSizeChange}>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default Pagination;
