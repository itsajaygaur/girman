import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <main className="h-screen w-full overflow-auto bg-gradient-to-t from-[#B1CBFF] to-[#FFFFFF]">
      <Navbar />

      <div className=" w-full">
        <div className="max-w-[1080px] px-4 mx-auto py-6">
          <Home />
        </div>
      </div>
    </main>
  );
}

export default App;
