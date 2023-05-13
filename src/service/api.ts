import { API_KEY } from './config';
import axios from "axios";

const genres: { [key: number]: string } = {
    12: 'Adventure',
    14: 'Fantasy',
    16: 'Animation',
    18: 'Drama',
    27: 'Horror',
    28: 'Action',
    35: 'Comedy',
    36: 'History',
    37: 'Western',
    53: 'Thriller',
    80: 'Crime',
    99: 'Documentary',
    878: 'Science Fiction',
    9648: 'Mystery',
    10402: 'Music',
    10749: 'Romance',
    10751: 'Family',
    10752: 'War',
    10770: 'TV Movie',
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getImagePath = (path: string) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path: string) =>
    `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;


export interface ResponseData {
    page: number,
    results: Array<MovieData>
}

export interface MovieData {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieInfo {
    key: string;
    title: string;
    poster: string;
    backdrop: string;
    rating: number;
    description: string;
    releaseDate: string;
    genres: string[];
}


export const getMovies = async (): Promise<Array<MovieInfo>> => {

    const {data} = await axios.get<ResponseData>(API_URL)
    const movies : Array<MovieInfo> = data.results.map(
        (data) => ({
            key: String(data.id),
            title: data.original_title,
            poster: getImagePath(data.poster_path),
            backdrop: getBackdropPath(data.backdrop_path),
            rating: data.vote_average,
            description: data.overview,
            releaseDate: data.release_date,
            genres: data.genre_ids.map((genre) => genres[genre]),
        })
    )
    return movies;
};