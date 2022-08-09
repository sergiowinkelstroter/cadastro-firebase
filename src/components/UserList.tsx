import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDocs,
} from "firebase/firestore";
import { X } from "phosphor-react";
import { useEffect, useState } from "react";
import { db } from "../services/firebase";

interface UsersProps {
  id: string;
  email: string;
  name: string;
  telefone: number;
  profissão: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<DocumentData>([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  async function DeleteUser(user: UsersProps) {
    await deleteDoc(doc(db, "users", user.id));
    location.reload();
  }

  return (
    <div className="m-auto  rounded-lg md:w-[900px] ">
      <ul>
        {users.map((user: UsersProps) => {
          return (
            <div
              key={user.id}
              className="flex justify-between p-4 relative text-xs md:text-lg"
            >
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.profissão}</li>
              <li>{user.telefone}</li>
              <button
                onClick={(e) => DeleteUser(user)}
                className="bg-red-600 text-white rounded absolute -right-8 top-3 border-2 hover:bg-white hover:border-red-600 hover:text-red-600 transition-colors"
              >
                <X size={28} />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
