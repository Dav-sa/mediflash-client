export const UserProfile = ({ pubKey }) => {
  return (
    <div className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 font-semibold text-white duration-100 hover:bg-blue-800">
      <p>{pubKey}</p>
    </div>
  )
}
