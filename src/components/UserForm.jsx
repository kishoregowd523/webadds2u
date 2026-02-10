import { useState } from "react";

export default function UserForm({ onSave }) {
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Age: "",
    Address: "",
    Role: "",
    Status: "Active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
    setUser({});
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
      {Object.keys(user).map((key) => (
        <input
          key={key}
          placeholder={key}
          value={user[key]}
          onChange={(e) =>
            setUser({ ...user, [key]: e.target.value })
          }
          className="border p-2"
        />
      ))}
      <button className="col-span-2 bg-blue-600 text-white p-2">
        Save User
      </button>
    </form>
  );
}
