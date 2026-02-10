export default function UserList({ users, onDelete }) {
  return (
    <table className="w-full mt-4 border">
      <thead>
        <tr className="bg-gray-200">
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, i) => (
          <tr key={i} className="text-center border">
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.role}</td>
            <td>{u.status}</td>
            <td>
              <button
                className="text-red-500"
                onClick={() => onDelete(i)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
