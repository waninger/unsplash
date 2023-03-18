import GetImages from './GetImages';
import { useContext, useState } from 'react';
import { ImageContext } from '../ImageContext';

function SearchBar() {
    const {imageUrls, setImageUrls, pageNumber, setPageNumber, queryString, setQueryString} = useContext(ImageContext);
    
    const[query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
      };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(query)
        //setPageNumber(1)
        setQueryString(query); 
    }

    return (
        <div className='searchBar'>
            <form onSubmit={onSubmit}>
            <input name="searchInput" type = "text" onChange={handleChange} ></input>
            <input id="inputQuery"type="submit" value="find user"></input>
            </form>
        </div>
    );
}


export default SearchBar;