import "./home.css";
import Header from "../../components/header";
const Home = () => {
  return (
    <>
      <Header />
      <section className="home-container">
        <div className="box-quadrado">
          <span className="descricao">
            Let us take care of cleaning YOUR HOME and ensuring your familys
            health.
          </span>
          <div className="box-botao">
            <a href="">
              <span className="texto do botao">Clique aqui</span>
            </a>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Home;
