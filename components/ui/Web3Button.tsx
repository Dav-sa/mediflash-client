export const Web3Button = ({ clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 font-semibold text-white duration-100 hover:bg-blue-800"
    >
      Connect Wallet
    </button>
  )
}
