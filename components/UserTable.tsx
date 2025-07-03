import { User } from "../types";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

const UserTable: React.FC<Props> = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            {users.map(user => (
                <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.role}</td>
                <td className="px-6 py-4 flex gap-2">
                    <button onClick={() => onEdit(user)} className="text-sm px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Edit</button>
                    <button onClick={() => onDelete(user.id)} className="text-sm px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

  );
};

export default UserTable;
