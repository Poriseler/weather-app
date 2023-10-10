function Loader() {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
      <div className="relative z-10 animate-spin rounded-full border-t-4 border-b-4 border-gray-900 h-16 w-16"></div>
    </div>
    )
}

export default Loader
