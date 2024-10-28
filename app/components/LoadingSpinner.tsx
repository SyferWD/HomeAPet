

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-2">
        <div className="border-8 border-gray-300 border-t-blue-500 rounded-full w-16 h-16 animate-spin" />
        <p>Loading...</p>
    </div>
  )
}

export default LoadingSpinner