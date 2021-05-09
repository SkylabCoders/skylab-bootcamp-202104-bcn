import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { API_KEY, baseURL } from '../../../../../../common/http';
import {
  ContainerResults, SearcherInput, ListResult, InfoMovie
} from './style';

const Search = (props) => {
  // eslint-disable-next-line react/prop-types,no-unused-vars
  const { location, history } = props;
  // eslint-disable-next-line no-unused-vars
  const [movieList, setMovieList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line no-shadow,react/prop-types
      const searchValue = queryString.parseUrl(location.search);
      const { quest } = searchValue.query;
      const response = await fetch(`${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${quest}&page=1`);
      const movies = await response.json();
      setSearchValue(quest);
      setMovieList(movies);
    })();
    // eslint-disable-next-line react/prop-types
  }, [location.search]);

  // eslint-disable-next-line no-unused-vars
  const onChangeSearch = (e) => {
    // eslint-disable-next-line react/prop-types
    const urlParams = queryString.parse(location.search);
    urlParams.quest = e.target.value;
    // eslint-disable-next-line react/prop-types
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  const listMovies = movieList.results;
  // eslint-disable-next-line no-unused-vars
  const baseImgUrl = 'https://image.tmdb.org/t/p/w92';
  const truncatestring = (str) => (str.length > 100 ? `${str.substring(0, 70)}...` : str);

  return (
    <>
      <ContainerResults>
        <div>
          <SearcherInput type="text" value={searchValue} onChange={onChangeSearch} placeholder="Search movie..." />
        </div>
        <ListResult>
          <ul>
            {
              listMovies && (
                listMovies.map((element) => (
                  <li>
                    <Link to={`/detail/${element.id}`}>
                      <img
                        key={element.id}
                        src={`${baseImgUrl}${element.poster_path}`}
                        alt={element.originalTitle}
                      />
                      <InfoMovie>
                        <h4>{element.title}</h4>
                        <p>{element.release_date}</p>
                        <p>{truncatestring(element.overview)}</p>
                      </InfoMovie>
                    </Link>
                  </li>
                ))
              )
            }
          </ul>

        </ListResult>
      </ContainerResults>
    </>
  );
};

export default withRouter(Search);
