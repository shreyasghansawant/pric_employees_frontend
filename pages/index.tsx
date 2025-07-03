import { useEffect, useState } from "react";
import { User } from "../types";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import toast from 'react-hot-toast';

const API_URL = "https://us-central1-assesmentpric.cloudfunctions.net/getPricUsers";

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then((data) => {
        console.log("Fetched users:", data);
        setUsers(data)
      })
  }, []);

  const handleAddOrUpdate = async (user: User, isEdit: boolean) => {
    const method = isEdit ? "PUT" : "POST";
    const toastId = toast.loading("Updating user...");
    const res = await fetch(API_URL, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const updatedUser = await res.json();

    if (isEdit) {
      setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
      toast.success("User updated successfully ✅", { id: toastId });
    } else {
      setUsers([...users, updatedUser]);
      toast.success("User created successfully 🎉", { id: toastId });
    }

    setSelectedUser(null); 
  };
  

  const handleDelete = async (id: string) => {
    console.log("🗑 Deleting user with ID:", id);
    const toastId = toast.loading("Deleting User...");
    await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    setUsers(users.filter(user => user.id !== id));
    toast.success("User deleted 🗑️", { id: toastId });
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Pric Employees Dashboard</h1>
      <UserForm onSubmit={handleAddOrUpdate} selectedUser={selectedUser} />
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
