import ArticleCard from "./components/ArticleCard/ArticleCard";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <ThemeToggle />
      </header>

      <main>
        <ArticleCard />
      </main>
    </>
  );
}

export default App;
