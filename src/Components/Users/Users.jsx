import { connect } from "react-redux";
import { Card, Text } from "@mantine/core";
import { deleteUsers } from "../../redux/actions/user";

const Users = (props) => {
  const user = props.users?.map((user) => {
    return (
      <div className="designUser">
        <div className="userCard" key={user}>
          <Card shadow="sm" component="a">
            <Text size="sm">
              <p>User: {user.name}</p>
              <p>Surname: {user.surname}</p>
              <p>City: {user.city}</p>
              <p>Email: {user.email}</p>
              <p>Telephone: {user.telephone}</p>
              <p>Role: {user.role}</p>
              <div
                onClick={() => deleteUsers(user.id)}
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
  return <>{user}</>;
};

const mapStateToProps = (state) => ({
  users: state.credentials.users,
});
export default connect(mapStateToProps)(Users);
