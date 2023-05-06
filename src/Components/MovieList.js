import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    render() {
        let listedMovies = [
            {
              name: "Fear and Loathing In Las Vegas",
              description:
                "An oddball journalist (Johnny Depp) and his psychopathic lawyer (Benicio Del Toro) travel to Las Vegas for a series of psychedelic escapades. Based off the writings of Hunter S. Thompson.",
              dateReleased: 1993,
              genre: ["Adventure, ", "Comedy, ", "Drama "],
              movieLength: "1 hour 58 mins",
              ageRating: "R",
              image:
                "https://m.media-amazon.com/images/M/MV5BY2RkY2M2N2QtZGY5ZS00YmVjLThmNTItY2ZkM2JlYmFhZWQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
            },
            {
              name: "The Rocky Horror Picture Show",
              description:
                "A newly-engaged couple (Barry Bostwick and Susan Sarandon) have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter (Tim Curry).",
              dateReleased: 1975,
              genre: ["Comedy, ", "Horror, ", "Musical "],
              movieLength: "1 hour 40 mins",
              ageRating: "R",
              image:
                "https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_FMjpg_UX1000_.jpg",
            },
            {
              name: "Donnie Darko",
              description:
                "After narrowly escaping a bizarre accident, a troubled teenager (Jake Gyllenhaal) is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
              dateReleased: 2001,
              genre: ["Drama, ", "Mystery, ", "Sci-Fi "],
              movieLength: "1 hour 53 mins",
              ageRating: "R",
              image:
                "https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
            },
            {
              name: "South Park: Bigger, Longer & Uncut",
              description:
                "When Stan Marsh (Trey Parker and Matt Stone) and his friends go see an R-rated movie, they start cursing and their parents think that Canada is to blame.",
              dateReleased: 1999,
              genre: ["Animation, ", "Comedy, ", "Fantasy "],
              movieLength: "1 hour 20 mins",
              ageRating: "R",
              image:
                "https://m.media-amazon.com/images/M/MV5BOGE0ZWI0YzAtY2NkZi00YjkyLWIzYWEtNTJmMzJjODllNjdjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            },
            {
              name: "Deadpool",
              description:
                "A wisecracking mercenary (Ryan Reynolds) gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
              dateReleased: 2016,
              genre: ["Action, ", "Comedy, ", "Comics"],
              movieLength: "1 hour 48 mins",
              ageRating: "R",
              image:
                "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F12%2Fdeadpool-poster.jpg&q=60",
            },
            {
              name: "Scary Movie 3",
              description: "Cindy (Anna Faris) must investigate mysterious crop circles and video tapes, and help the President (Leslie Nielsen) in preventing an alien invasion.",
              dateReleased: 2003,
              genre: ["Comedy, ", "Spoof, ", "Action"],
              movieLength: "1 hour 24 mins",
              ageRating: "PG-13",
              image:
                "https://image.tmdb.org/t/p/original/zkPrbpVBYjrsfVVyt2aS3xxK0Xz.jpg",
            },
            {
              name: "Monty Python's The Meaning of Life",
              description:
                "The comedy team (John Cleese, Terry Gilliam, Eric Idle, and more) takes a look at life in all of its stages in their own uniquely silly way.",
              dateReleased: 1983,
              genre: ["Comedy, ", "Musical, ", "Silly"],
              movieLength: "1 hour 47 mins",
              ageRating: "R",
              image:
                "https://image.tmdb.org/t/p/original/6seX76TswA3zRN8aXZC5rV2aIVY.jpg",
            },
            {
              name: "Trailer Park Boys: The Movie",
              description:
                "Ricky (Robb Wells), Julian (John Paul Tremblay), and Bubbles (Mike Smith) come up with a scheme to steal large amounts of untraceable coins.",
              dateReleased: 2006,
              genre: ["Comedy, ", "Crime, ", "Canadian"],
              movieLength: "1 hour 35 mins",
              ageRating: "R",
              image:
                "https://m.media-amazon.com/images/M/MV5BMTczMDg2MzkwNl5BMl5BanBnXkFtZTcwNTY0MTM0MQ@@._V1_.jpg",
            },
            {
              name: "Inglorious Basterds",
              description:
                "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers (Brad Pitt, Eli Roth, B.J. Novak, and more) coincides with a theatre owner's vengeful plans for the same.",
              dateReleased: 2009,
              genre: ["Adventure, ", "Drama, ", "War"],
              movieLength: "2 hours 33 mins",
              ageRating: "R",
              image:
                "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
            },
            {
              name: "The Crow",
              description:
                "A man brutally murdered (Brandon Lee) comes back to life as an undead avenger of his and his fiancée's murder.",
              dateReleased: 1994,
              genre: ["Action, ", "Crime, ", "Drama "],
              movieLength: "1 hour 42 mins",
              ageRating: "R",
              image:
                "https://m.media-amazon.com/images/M/MV5BM2Y4ZGVhZjItNjU0OC00MDk1LWI4ZTktYTgwMWJkNDE5OTcxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
            },
          ];
      
          return (
            <div>
              {listedMovies.map((movie, index) => (
                <Movie
                  key={index}
                  name={movie.name}
                  description={movie.description}
                  dateReleased={movie.dateReleased}
                  movieLength={movie.movieLength}
                  genre={movie.genre}
                  ageRating={movie.ageRating}
                  image={movie.image}
                />
              ))}
            </div>
          );
    }
}