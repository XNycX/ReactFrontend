import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Image, Text } from "@mantine/core";
import './Movie.css'

const Movie = (props) => {
  const movie = props.movies?.map((movie) => {
    return (
      <div className="filmCard" key={movie.id}>
        <Card
          shadow="sm"
          p="xl"
          component="a"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          <Card.Section>
            <Link to={"/moviedetail/" + movie.id}>
              <Image src={!movie.img.includes('pics.filmaffi') ? movie.img : 'https://www.mubis.es/media/users/553/108348/cual-sera-vuestra-primera-pelicula-del-2015-original.jpg'} alt={movie.title} height={160} />
            </Link>
          </Card.Section>

          <Text weight={500} size="lg">
            {movie.title}
          </Text>

          <Text size="sm">{movie.overview}</Text>
        </Card>
      </div>
    );
  });
  return <>{movie}</>;
};

const mapStateToProps = (state) => ({
  movies: state.films.movies,
});
export default connect(mapStateToProps)(Movie);
