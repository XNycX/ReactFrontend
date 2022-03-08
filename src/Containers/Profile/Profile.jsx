import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { MODIFY_CREDENTIALS } from "../../redux/types";
import axios from "axios";
import { Button, Input, Modal } from "@mantine/core";
import "./Profile.css";

const Profile = (props) => {
  let navigate = useNavigate();

  //Hooks
  const [dataUser, setDataUser] = useState({
    name: props.user.user.name,
    surname: props.user.user.surname,
    city: props.user.user.city,
    edad: props.user.user.edad,
    email: props.user.user.email,
    dni: props.user.user.dni,
    telephone: props.user.user.telephone,
  });

  //Handler (manejador)
  const fillData = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (props.user.token === "") {
      navigate("/");
    }
  });

  const updateUser = async () => {
    let config = {
      headers: { Authorization: `${props.user.token}` },
    };

    try {
      // Hacemos el update en la base de datos
      let res = await axios.put(
        `http://localhost:5500/users/${props.user.user.id}`,
        dataUser,
        config
      );

      if (res) {
        //Guardamos en redux
        props.dispatch({ type: MODIFY_CREDENTIALS, payload: dataUser });
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
                <div className="updateBoton" onClick={() => updateUser()}>
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

const mapStateToProps = (state) => ({ user: state.credentials.user });
export default connect(mapStateToProps)(Profile);
