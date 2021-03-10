import React, { useEffect, useState } from 'react';
import api, { API_KEY, PATH_IMAGE } from '../../services/api.js';

import Movie from '../../components/Movie';

import * as S from './styles';

const Home = () => {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await api.get(`/discover/movie?api_key=${API_KEY}`);

      const { results } = response.data;

      const resultWithImagePath = results.map((movie) => ({
        ...movie,
        full_backdrop_path: PATH_IMAGE + movie.backdrop_path
      }));

      setListMovies(resultWithImagePath);
    }

    getMovies();
  }, []);

  return (
    <S.Container>

      <S.ListMovies
        showsVerticalScrollIndicator={false}
        data={listMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: movie }) => (
          <Movie
            title={movie.original_title}
            image={movie.full_backdrop_path}
            voteAverage={movie.vote_average}
          />
        )}
      />
    </S.Container>
  );
}

export default Home;