import { useEffect, useState } from "react";
import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      name
      age
      isMarried
    }
  }
`;

const CREATE_UESR = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      name
    }
  }
`;

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isMarried, setIsMarried] = useState(false);

  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
    refetch: refetchUsers,
  } = useQuery(GET_USERS);
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: "2",
    },
  });

  const [createUser, { data: createUserData }] = useMutation(CREATE_UESR);

  const handleCreateUser = async () => {
    createUser({ variables: { name, age, isMarried } });
  };

  useEffect(() => {
    if (createUserData) {
      refetchUsers();
      setName("");
      setAge(0);
      setIsMarried(false);
    }
  }, [createUserData, refetchUsers]);

  if (usersLoading || userLoading) return <p>Loading...</p>;
  if (usersError) return <p>Error: {usersError.message}</p>;
  if (userError) return <p>Error: {userError.message}</p>;

  return (
    <>
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          style={{ marginRight: "10px" }}
          type="checkbox"
          placeholder="Is Married"
          value={isMarried}
          onChange={(e) => setIsMarried(e.target.checked)}
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>

      <div>
        <h1>Chosen User: {userData?.getUserById?.name}</h1>
        <p>Age: {userData?.getUserById?.age}</p>
        <p>Married: {userData?.getUserById?.isMarried ? "Yes" : "No"}</p>
      </div>

      <h1>Users</h1>
      {usersData && (
        <div>
          {usersData.getUsers.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>Age: {user.age}</p>
              <p>Married: {user.isMarried ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
