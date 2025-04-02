export interface Movies {
    Title: string;
    Poster: string;
    Year: string;
}

export type User = {
    id: string,
    name: string,
    email: string,
    password: string,
    movieIds: string[],
};

export interface UserMovie {
    idMovie: string,
    title: string,
    poster: string,
    year: string,
}

