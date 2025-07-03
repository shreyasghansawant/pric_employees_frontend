import { useEffect, useState } from "react";
import { User } from "../types";

interface Props {
  onSubmit: (user: User, isEdit: boolean) => void;
  selectedUser: User | null;
}

const UserForm: React.FC<Props> = ({ onSubmit, selectedUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
      setRole(selectedUser.role);
    } else {
      setName("");
      setEmail("");
      setRole("");
    }
  }, [selectedUser]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const user: Partial<User> = {
      name,
      email,
      role,
    };

    if (selectedUser?.id) {
      user.id = selectedUser.id;
    }

    onSubmit(user as User, !!selectedUser);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 mb-6 mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        {selectedUser ? "Edit Employee" : "Add New Employee"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
          <input
            type="text"
            placeholder="e.g. Software Engineer"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition"
        >
          {selectedUser ? "Update" : "Add"} Employee
        </button>
      </div>
    </form>
  );
};

export default UserForm;
