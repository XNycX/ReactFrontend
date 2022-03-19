import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Card, Image, Text } from "@mantine/core";
import "./Movie.css";
import { deleteMovieById } from "../../redux/actions/movie";
import { useNotifications } from "@mantine/notifications";
import { Check } from "tabler-icons-react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Movie = (props) => {
  AOS.init();
  const notifications = useNotifications();
  const onSubmit = async (id) => {
    try {
      const res = await deleteMovieById(id);
      if (res) {
        notifications.showNotification({
          message: "Movie successfully deleted",
          icon: <Check />,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
    const movie = props.movies?.map((movie) => {
      return (
        <div className="filmCard" data-aos="fade-right" key={movie.id}>
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
                onClick={() => onSubmit(movie.id)}
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
