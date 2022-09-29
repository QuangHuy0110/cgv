import axios from 'axios';

const getDataMovieById = async (id, lang = 'en-US') => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=${lang}&append_to_response=videos,images&include_image_language=en,null`;
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}

const getDataUpcomingMovies = async (page = 1, lang = 'en-US') => {
    // lay ra cac bo phim tu ngay hien cho den 3 thang sau
    let date = new Date();
    let today = date.getDate();
    today = today < 10 ? "0"+today : today;
    let month = date.getMonth() + 1;
    month = month < 10 ? "0"+month : month;
    let year = date.getFullYear();
    let gte = `${year}-${month}-${today}`;

    // cong them 3 thang vao gte
    let futureDate = new Date();
    futureDate.setTime(date.getTime() + (129600*60*1000));
    // lay ra ngay hien tai cua 3 thang tiep theo
    let today2 = futureDate.getDate();
    today2 = today2 < 10 ? "0"+today2 : today2;
    let month2 = futureDate.getMonth() + 1;
    month2 = month2 < 10 ? "0"+month2 : month2;
    let year2 = futureDate.getFullYear();
    let lte = `${year2}-${month2}-${today2}`;

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=${lang}&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${gte}&release_date.lte=${lte}&with_release_type=3|2`;

    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : {};
    return result;
}
export const apiMovies = {
    getDataUpcomingMovies,
    getDataMovieById
}