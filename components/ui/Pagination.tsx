interface PaginationProps {}

export const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize)
  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

  return (
    <div className="">
      <ul className="flex  justify-center ">
        {pages.map((page) => (
          <li
            onClick={() => onPageChange(page)}
            key={page}
            className="mx-2 mb-6 cursor-pointer p-2 text-lg font-bold "
          >
            <a className={page == currentPage ? "bg-slate-500 p-4" : null}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
