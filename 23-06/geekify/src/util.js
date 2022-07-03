import axios from "axios";

const napster = axios.create({
  baseURL: 'https://api.napster.com/v2.2/',
  timeout: 10000,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
});

//get track or album image 
//https://api.napster.com/imageserver/v2/albums/{album_id}/images/{size}.{extension}
const trackImage = albumId => {
  return `https://api.napster.com/imageserver/v2/albums/${albumId}/images/500x500.jpg`;
  //Album image(Top artist song id)
  //it'll technically show the album image the song belongs to
}

//For fetching the Artist Image
// we add an api client in util.js for getting artist image 
// GET Artist Images
// Returns a list of licensed images for an artist.
///v2.2/artists/Art.28463069/images

//we can add size/extension of the image at the end 
///v2.2/artists/Art.28463069/images/{size}.{extension}
const getArtistImage = artistId => {
  return `https://api.napster.com/imageserver/v2/artists/${artistId}/images/150x100.jpg`;
  //Artist Image(Top artists song id)
}

export {napster, trackImage, getArtistImage};

