import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Rutas from "./routes/Rutas";
function App() {
  return (
    <Layout>
      <Navbar />
      <Rutas />
    </Layout>
  );
}

export default App;
