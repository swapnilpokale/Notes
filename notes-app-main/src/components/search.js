import { MdSearch } from 'react-icons/md'

const Search = ({ search }) => {
    return (
        <div className="search">
            <MdSearch
                className='search-icon'
                size='1.3em'
            />
            <input
                onChange={(event) => search(event.target.value)}
                type="text"
                placeholder='type to search..' />
        </div>
    )
}

export default Search;