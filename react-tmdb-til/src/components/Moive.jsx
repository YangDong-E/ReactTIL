import React from 'react';

// poster_path는 이미지별 url이기 때문에 앞에 붙을 BASE_URL을 따로 지정하여 사용하기 쉽게 지정
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const Moive = ({ title, poster_path, vote_average }) => {
    return (
        <div className="movie-container">
            {/* 포스터 이미지 */}
            {/* src를 {}로 묶어서 IMG_BASE_URL과 poster_path를 +로 묶을수있게 하였다. */}
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
            {/* 영화 정보 */}
            <div className="movie-info">
                {/* 제목 */}
                <h4>{title}</h4>
                {/* 평균 평점 */}
                <span>{vote_average}</span>
            </div>
        </div>
    );
};

export default Moive;
