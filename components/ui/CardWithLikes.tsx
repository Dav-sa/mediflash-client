export const CardWithLikes = ({ title, likes }) => {
  return (
    <div className=" flex flex-col items-center rounded-xl border-sky-700 bg-slate-800 p-6 text-center hover:border-2 hover:border-solid ">
      <div className="mt-2 p-2 ">
        <p className="mb-2 text-xl hover:text-sky-300 ">
          Title : <span className="font-semibold">{title}</span>
        </p>
        {likes &&
          likes.map((user) => {
            return <p className="truncate">Liked by : {user.pubkey}</p>
          })}
      </div>
    </div>
  )
}
