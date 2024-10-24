import BodyContainer from "./assets/components/BodyContainer";
import Done from "./assets/components/Done";
import Header from "./assets/components/Header";
import OnProgress from "./assets/components/OnProgress";
import Revised from "./assets/components/Revised";
import Sidebar from "./assets/components/Sidebar";
import Todo from "./assets/components/Todo";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <BodyContainer>
            <Todo />
            <OnProgress />
            <Done />
            <Revised />
          </BodyContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
