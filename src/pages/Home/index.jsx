import "./home.css";
import Header from "../../components/header";
const Home = () => {
  return (
    <>
      <Header />
      <section className="home-container" id = 'home'>
        <div className="box-quadrado">
          <span className="descricao">
            Let us take care of cleaning <span className="texto-destaque">YOUR HOME</span> and ensuring your family's
            health.
          </span>
          <div className="box-botao">
            <a href="">
              <span className="texto do botao">Make Appointment</span>
            </a>
          </div>
        </div>
      </section>
      <section className="servicos-container" id = 'servicos'>
       
        <div className="box-quadrado-servicos">
           <h1 className="titulo-servicos">Residential Radiance: Transforming Homes Through Cleaning</h1>
          <span className="texto-terciario">
            Experience the feeling of purity and comfort in your home with Radiant Residential Cleaning services. Our specialized team takes care of every detail, ensuring that every corner shines with cleanliness and vitality. Let us make your home an immaculate haven for you to enjoy special moments and relax with tranquility. Discover the transformative power of Radiant Residential Cleaning today!
          </span>
          <ul className="box-lista">
            <li className="itens-lista">Clarity and Effectiveness in Residential Cleaning</li>
            <li className="itens-lista">Inviting Environments for Well-Being</li>
            <li className="itens-lista">Time for You, Care for Your Home</li>
          </ul>
        </div>
        <div className="lado-direito">
          <div className="exemplo-imagem"></div>
          <div className="box-botao">
              <a href="">
                <span className="texto do botao">request your quote</span>
              </a>
          </div>
        </div>
        
      </section>

      <section className="sobrenos-container" id = 'servicos'>
        <div className="conteudo">
          <h1 className="titulo-sobrenos">THE ART AND SCIENCE OF BETTER   CLEANING
          </h1>
          <h2 className="subtitulo-sobrenos">
          Keeping your home clean and safe is essential for your health.</h2>
          <span className="texto-sobrenos">A professional cleaning company committed to delivering comprehensive hygiene and organization solutions for homes and commercial spaces. Our highly trained team and modern equipment ensure impeccable environments, promoting comfort and well-being. Let us take care of the cleaning, allowing you to enjoy a healthy and inviting atmosphere.
          </span>

        </div>
        <div className="galeria">
          
        </div>
       
        
        
      </section>
     
      
    </>
  );
};

export default Home;
