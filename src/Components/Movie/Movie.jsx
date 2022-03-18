import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Image, Text } from "@mantine/core";
import "./Movie.css";
import { deleteMovies, getMovies } from "../../redux/actions/movie";

const Movie = (props) => {
  const movie = props.movies?.map((movie) => {
    const deleteMovieById = async (id) => {
      await deleteMovies(id)
      await getMovies()
    }
    return (
      <div className="filmCard" key={movie.id}>
        <Card shadow="sm" p="xl" component="a">
          <Card.Section>
            <Link to={"/moviedetail/" + movie.id}>
              <Image
                src={
                  !movie.img.includes("pics.filmaffi")
                    ? movie.img
                    : "https://www.mubis.es/media/users/553/108348/cual-sera-vuestra-primera-pelicula-del-2015-original.jpg"
                }
                alt={movie.title}
                height={160}
              />
            </Link>
          </Card.Section>
          <Text weight={500} size="lg">
            {movie.title}
          </Text>

          <Text size="sm">{movie.overview}</Text>
          {props.user?.role === "admin" ? (
            <div
              onClick={() => deleteMovieById(movie.id)}
              className="deleteButton"
            >
              Delete
            </div>
          ) : (
            ""
          )}
        </Card>
      </div>
    );
  });
  return <>{movie}</>;
};

const mapStateToProps = (state) => ({
  movies: state.films.movies,
  user: state.credentials.user,
});
export default connect(mapStateToProps)(Movie);
