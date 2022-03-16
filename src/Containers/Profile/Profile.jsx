import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Button,Input,Modal, Card, Text,} from "@mantine/core";
import { Check } from "tabler-icons-react";
import "./Profile.css";
import { updateUser, getUserInfo } from "../../redux/actions/user";
import { useNotifications } from "@mantine/notifications";

const Profile = (props) => {
  const notifications = useNotifications();
  let navigate = useNavigate();
  //Hooks
  const [dataUser, setDataUser] = useState({
    name: props.user.name,
    surname: props.user.surname,
    city: props.user.city,
    email: props.user.email,
    dni: props.user.dni,
    telephone: props.user.telephone,
  });

  //Handler (manejador)
  const fillData = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (props.user.token === "") {
      navigate("/");
    }
  });

  const onSubmit = async () => {
    try {
      const res = await updateUser(props.user.id, dataUser);
      if (res) {
        setOpened(false);
        notifications.showNotification({
          message: "Usuario actualizado con éxito",
          icon: <Check />,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [opened, setOpened] = useState(false);

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>
            {dataUser.name} {dataUser.surname}
          </h1>
          <p>
            <b>Ciudad: </b>
            {dataUser.city}
          </p>
          <p>
            <b>Email: </b>
            {dataUser.email}
          </p>
          <p>
            <b>Dni: </b>
            {dataUser.dni}
          </p>
          <p>
            <b>Teléfono: </b>
            {dataUser.telephone}
          </p>
          <Button onClick={() => setOpened(true)}>Update User</Button>
          <br />
        </div>
        <div className="card">
          <h1>My Rents</h1>
          {props.user.Orders?.map((order) => {
            return (
              <Card
                shadow="sm"
                component="a"
              >
                <Text weight={500} size="lg">
                  Title: {order.Movie.title}
                </Text>
                <Text size="sm">
                  <p>Price: {order.Movie.price}€</p>
                  <p>Rent date: {order.date_rent}</p>
                  <p>Return date: {order.date_return}</p>
                </Text>
              </Card>
            );
          })}
          <br />
        </div>
      </div>
      <Modal
        centered
        size="calc(60vw - 300px)"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Aquí puedes modificar tus datos!"
      >
        <div className="designProfile">
          <div className="designProfileHalf profileLeft">
            <div className="profileField">
              <b>Nombre: </b>
              <Input
                variant="filled"
                type="text"
                name="name"
                value={dataUser.name || ""}
                autoComplete="off"
                onChange={(e) => {
                  fillData(e);
                }}
              />
            </div>
            <div className="profileField">
              <b>Apellido: </b>
              <Input
                type="text"
                name="surname"
                value={dataUser.surname || ""}
                autoComplete="off"
                onChange={(e) => {
                  fillData(e);
                }}
              />
            </div>
            <div className="profileField">
              <b>Ciudad: </b>
              <Input
                type="text"
                name="city"
                value={dataUser.city || ""}
                autoComplete="off"
                onChange={(e) => {
                  fillData(e);
                }}
              />
            </div>
            <div className="profileField">
              <b>Email: </b>
              <Input
                type="email"
                name="email"
                value={dataUser.email || ""}
                autoComplete="off"
                onChange={(e) => {
                  fillData(e);
                }}
              />
            </div>
            <div className="profileField">
              <b>Teléfono: </b>
              <Input
                type="text"
                name="telephone"
                value={dataUser.telephone || ""}
                autoComplete="off"
                onChange={(e) => {
                  fillData(e);
                }}
              />
              <div className="profileField">
                <b>Dni: </b>
                <Input
                  type="text"
                  name="dni"
                  value={dataUser.dni || ""}
                  autoComplete="off"
                  onChange={(e) => {
                    fillData(e);
                  }}
                />
              </div>
              <div className="profileField buttonFlex">
                <div className="updateBoton" onClick={() => onSubmit()}>
                  Actualizar
                </div>
              </div>
            </div>
          </div>
          <div className="designProfileHalf profileRight"></div>
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.credentials.user,
  token: state.credentials.token,
  message: state.credentials.message,
});
export default connect(mapStateToProps)(Profile);
