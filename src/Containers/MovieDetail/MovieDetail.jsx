import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Rent from "../../Components/Rent/Rent";
import { getMovieById } from "../../redux/actions/movie";
import "./MovieDetail.css";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

const MovieDetail = (props) => {
  const { id } = useParams();
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  useEffect(() => {
    getMovieById(id);
  }, []);

  return (
    <div className="card-detail">
      <Card className="card-style" shadow="sm" p="lg">
        <Card.Section>
          <Image src={props.movie.img} height={160} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{props.movie.title}</Text>
          <Badge color="pink" variant="light">
            Precio: {props.movie.price}€
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {props.movie.overview}
        </Text>
        {props.user ? (
          <Button
            variant="light"
            color="blue"
            fullWidth
            style={{ marginTop: 14 }}
          >
           Rent
          </Button>
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.credentials.user,
  movie: state.films.movie,
});
export default connect(mapStateToProps)(MovieDetail);
