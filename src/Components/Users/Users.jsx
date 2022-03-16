import { connect } from "react-redux";
import { Card, Text } from "@mantine/core";

const Users = (props) => {
    const user = props.users?.map((user) => {
        return (
            <div className="userCard" key={user.id}>
                <Card
                    shadow="sm"
                    component="a">
                    <Text size="sm">
                        <p>User: {user.name}</p>
                        <p>Surname: {user.surname}</p>
                        <p>City: {user.city}</p>
                        <p>Email: {user.email}</p>
                        <p>Telephone: {user.telephone}</p>
                        <p>Role: {user.role}</p>
                    </Text>
                </Card>
            </div>
        );
    });
    return <>{user}</>;
}

const mapStateToProps = (state) => ({
    users: state.credentials.user,
  });
  export default connect(mapStateToProps)(Users);