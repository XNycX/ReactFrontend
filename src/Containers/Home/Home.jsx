import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Group, Avatar, Text, Accordion,Title  } from "@mantine/core";


const Home = () => {
  function AccordionLabel({ label, image, description }) {
    return (
      <Group noWrap>
        <Avatar src={image} radius="xl" size="lg" />
        <div>
          <Text>{label}</Text>
          <Text size="sm" color="dimmed" weight={400}>
            {description}
          </Text>
        </div>
      </Group>
    );
  }
  let navigate = useNavigate();
  //Primero comprobamos en el hook si tenemos el token (estamos logeados)
  const [credentials, setCredentials] = useState(
    JSON.parse(localStorage.getItem("dataUser"))
  );

  if (credentials?.dataUser?.token !== undefined) {
    return <div>Hola {credentials.dataUser.name}, Bienvenid@ a films2022</div>;
  } else {
    return (
      <div className="home">
        <Title className="title">Bienvenid@ a <Text color="red" inherit component="span">Films 2022</Text> donde ver una pelicula gratis sin publicidad ya no es un milagro</Title>
        <Accordion initialItem={-1} iconPosition="right">
          <Accordion.Item
            label={
              <AccordionLabel
                image="https://w7.pngwing.com/pngs/327/703/png-transparent-cinema-film-moveis-logo-film-art-film.png"
                label="Sobre films 2022"
                description="¿Buscas una aplicación para alquilar peliculas rápido y facil? No busques más Films 2022 llega para solucionarte la vida. Las mejores peliculas, sin publicidad y en exclusiva. "
              />
            }
          >
            <Text size="sm">No pierdas más el tiempo y alquila una de tus peliculas favoritas YA</Text>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
};
export default Home;
