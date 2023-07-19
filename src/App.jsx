import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Rutas from "./routes/Rutas";
function App() {
  return (
    <Layout>
      <Navbar />
      <Rutas />
      <Footer />
    </Layout>
  );
}

export default App;
