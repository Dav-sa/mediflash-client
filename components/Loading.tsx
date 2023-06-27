export const Loading = () => {
  return (
    <div className="container flex justify-center items-center my-64">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status "
      ></div>
    </div>
  )
}
