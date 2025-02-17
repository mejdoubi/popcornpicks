import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesList from "./components/MoviesList";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-4 flex-grow flex items-center justify-center">
        <MoviesList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
