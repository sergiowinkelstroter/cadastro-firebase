import { Inputs } from "./components/Inputs";
import { UserList } from "./components/UserList";

function App() {
  return (
    <div>
      <div className="bg-blue-700 p-4">
        <h1 className="text-white text-2xl md:text-4xl flex justify-center">
          Cadastro
        </h1>
      </div>
      <Inputs />
      <div className=" bg-blue-700 shadow-2xl  md:w-[900px]  m-auto w-[320px] mb-4 rounded-lg ">
        <ul className="flex justify-between p-4 text-lg md:text-xl text-white mr-4 md:font-bold">
          <li>Name</li>
          <li>E-mail</li>
          <li>Profissão</li>
          <li>Telefone</li>
        </ul>
      </div>
      <UserList />
    </div>
  );
}

export default App;
