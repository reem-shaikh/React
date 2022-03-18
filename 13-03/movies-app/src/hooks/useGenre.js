const useGenre = (selectedGenres) => {
  //if there are no elements inside selectedGenres[] then return an empty string 
  if (selectedGenres.length < 1) return "";

  //select all the elemnents inside selectedGenres[]
  const GenreIds = selectedGenres.map((g) => g.id);

  //reducce takes 2 params 
  //accumulator - everytime we iterate over the array, it adds current value to the accumulator 
  return GenreIds.reduce((acc, curr) => acc + "," + curr);
  //1
  //2
  //3

  //it returns it as 1, 2, 3
};

export default useGenre;

/*
const numbers = [1, 2, 3, 4]

numbers.reduce((accumuator, currentValue) => {
  return accumulator + "." + currentValue
}, 0)


reduce function takes 2 arguments: 
1. callback function 
2. value of accumulator, in this case its 0


*/
