import React from 'react';
import Imdb from '../../assets/img/imdb-brands.png';

import * as S from './styles';

const Movie = (rest) => {
  return <S.Container>
    <S.ContainerLeft>
      <S.ImageMovie source={{ uri: rest.image }} />
    </S.ContainerLeft>

    <S.ContainerRight>
      <S.Title
        numberOfLines={1}
      >{rest.title}</S.Title>

      <S.Detail>
        <S.ImageImdb source={Imdb} />

        <S.VoteAverage>{rest.voteAverage}</S.VoteAverage>
      </S.Detail>

    </S.ContainerRight>
  </S.Container>;
}

export default Movie;