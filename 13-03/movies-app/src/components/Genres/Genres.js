import { Chip } from "@material-ui/core";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {
  //when we click on  a particular Chip we want that genre (to be removed from genre[])and to be added to another array called selectedGenres[]
  //were going to be toggling chips from one array to another 

  //there are 2 ways to approach this problem
  //1. if the id user clicked on is equal to genre.id, then add it to the selectedGenres[] - blue array 
  //or 
  //2. if the id user clicked on is equal to genre.id, then we add all the id that is not the same as the one user clicked on in the genre[]and we add the g.id user selected in the blue array - selectedGenres[]

  const handleAdd = (genre) => {
    //keep all the values in selectedgeneres and add the genre that user selected in this array - blue array 
    // note that when we dont give the ... we loose the old values inside selectedGenres
    setSelectedGenres([...selectedGenres, genre]);

    //remove the genere user clciked from the white genre and place it in the 'blue' color setGenre[]
    //were revamping the values inside setGenres[]
    setGenres(genres.filter((g) => g.id !== genre.id));
    //were adding all the g.id uer clicked on that do not match with the genre id inside setGenres[]

    //when genreid does not match the gid user clicked, you add it in th white array - genres[]
    //when it matches you add it in the blue aray - selectedGenres[]
    setPage(1);
  };

  //primary - blue color 
  //secondary- red color 

  const handleRemove = (genre) => {
    //all the id's that are selected by the user are in the blue array- selectedGenres[]
    //we want to take it out of the the selectedGenres[], when user clicks on remove - when we remove it its added back to the genre[]
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
      //when the id user clicked on does not match with the genre.id, basically all the id's user doesnt want to remove, we let those id's stay in the selectedGenres[] 
    );
    //we add the genre user clicked o to remove from the selectedGenres[] into the genres[]
    setGenres([...genres, genre]);
    setPage(1);
  };

  //were fetching all the genres inside the setGenres[]
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  //on reloading the movies component we call this function 
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      
 {/*  when we click on any chip from the genre[] array - white array 
      
      it runs the handleAdd function and adds it to the selectedGenre[]
      when selected 
  */}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
