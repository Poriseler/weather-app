import Button from "../../ui/Button"

function SearchBar() {
    return (
        <div className="bg-red-600 flex items-end justify-center" >
            <form>
                <input className="rounded-full px-3 md:px-4 py-2 md:py-3 text-large w-32 focus:w-48 transition-all duration-300 me-4 md:me-8 focus:ring focus:ring-green-500 focus:outline-none focus:ring-opacity-75" placeholder="Enter city"/>
                <Button type='primary'>Search</Button>
            </form>
                
            
        </div>
    )
}

export default SearchBar
