import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Group, Avatar, Text, Accordion, Title } from "@mantine/core";

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
        <Title className="title">
          Welcome to{" "}
          <Text color="red" inherit component="span">
            Films 2022 
          </Text> where watching a movie at a good price without advertising is no
          longer a miracle
        </Title>
        <Accordion initialItem={-1} iconPosition="right">
          <Accordion.Item
            label={
              <AccordionLabel
                image="https://w7.pngwing.com/pngs/327/703/png-transparent-cinema-film-moveis-logo-film-art-film.png"
                label="Sobre films 2022"
                description="Are you looking for an application to rent movies quickly and easily? Look no further Films 2022 arrives to solve your life. The best movies, without advertising and exclusively."
              />
            }
          >
            <Text size="sm">
              Don't waste any more time and rent one of your favorite movies NOW
            </Text>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
};
export default Home;
