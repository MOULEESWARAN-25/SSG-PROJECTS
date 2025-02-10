import Header from "./Components/Header";
import HomePage from "./Pages/Homepage";
export default function App() {
  return (
    <div className="flex flex-col p-5 pl-40 pr-40 gap-24">
      <Header />
      <HomePage />
    </div>
  );
}
