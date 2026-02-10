import { useState, useEffect } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import { getUsers, saveUsers } from "../utils/localStorage";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const addUser = (user) => {
    const updated = [...users, user];
    setUsers(updated);
    saveUsers(updated);
  };

  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
    saveUsers(updated);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <UserForm onSave={addUser} />
      <UserList users={users} onDelete={deleteUser} />
    </div>
  );
}
