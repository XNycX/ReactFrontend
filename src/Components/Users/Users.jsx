import { connect } from "react-redux";
import { Card, Text } from "@mantine/core";
import { deleteUser } from "../../redux/actions/user";
import { useNotifications } from "@mantine/notifications";
import { Check } from "tabler-icons-react";
import './Users.css'

const Users = (props) => {
  const notifications = useNotifications();
  const onSubmit = async (id) => {
    try {
      const res = await deleteUser(id);
      if (res) {
        notifications.showNotification({
          message: "User successfully deleted",
          icon: <Check />,
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  const user = props.users?.map((user) => {
    return (
      <div className="designUser">
        <div className="userCard" key={user.id}>
          <Card shadow="sm" component="a">
            <Text size="sm">
              <p>User: {user.name}</p>
              <p>Surname: {user.surname}</p>
              <p>City: {user.city}</p>
              <p>Email: {user.email}</p>
              <p>Telephone: {user.telephone}</p>
              <p>Role: {user.role}</p>
              <div
                onClick={() => onSubmit(user.id)}
                className="deleteButton"
              >
                Delete
              </div>
            </Text>
          </Card>
        </div>
      </div>
      
    );
  });
  return <div className="users">{user}</div>;
};

const mapStateToProps = (state) => ({
  users: state.credentials.users,
});
export default connect(mapStateToProps)(Users);
