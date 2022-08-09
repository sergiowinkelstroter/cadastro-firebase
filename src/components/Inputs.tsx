import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../services/firebase";

export const Inputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profissão, setProf] = useState("");
  const [telefone, setFone] = useState("");

  const userCollectionRef = collection(db, "users");

  async function NewUser() {
    const user = await addDoc(userCollectionRef, {
      name,
      email,
      profissão,
      telefone,
    });
    setName("");
    setEmail("");
    setProf("");
    setFone("");
    location.reload();
  }

  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-slate-400 p-2 rounded-md m-6 shadow-lg">
      <div className="flex flex-col m-2  md:w-48">
        <label htmlFor="" className="font-medium">
          Nome:
        </label>
        <input
          type="text"
          className=" border-2 rounded-lg outline-none pl-1 text-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col m-2 md:w-48">
        <label htmlFor="" className="font-medium">
          E-mail:
        </label>
        <input
          type="email"
          className=" border-2 rounded-lg outline-none pl-1 text-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col m-2 md:w-48">
        <label htmlFor="" className="font-medium">
          Profissão:
        </label>
        <input
          type="text"
          className=" border-2 rounded-lg outline-none pl-1 text-lg"
          value={profissão}
          onChange={(e) => setProf(e.target.value)}
        />
      </div>
      <div className="flex flex-col m-2 md:w-48">
        <label htmlFor="" className="font-medium">
          Telefone:
        </label>
        <input
          type="tel"
          className=" border-2 rounded-lg outline-none pl-1 text-lg"
          value={telefone}
          onChange={(e) => setFone(e.target.value)}
        />
      </div>

      <button
        onClick={NewUser}
        className="border-2 mb-2 md:mb-0 text-center w-36 mt-4 rounded-xl ml-6 h-12 bg-blue-600 text-lg text-white shadow-xl hover:bg-white hover:text-blue-600 hover:border-blue-600 transition-colors"
      >
        Cadastrar
      </button>
    </div>
  );
};
