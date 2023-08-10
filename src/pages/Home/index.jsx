import "./home.css";
import Header from "../../components/header";
import Imagem1 from "../../assets/images/exemplo1.png"
import Imagem2 from "../../assets/images/exemplo2.png"
import Imagem3 from "../../assets/images/exemplo3.png"
import Imagem4 from "../../assets/images/exemplo4.png"
import Imagem5 from "../../assets/images/exemplo5.png"
import Logo from "../../assets/images/logo.png";
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
            <a href="tel:+1-425-647-5047">
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
              <a href="tel:+1-425-647-5047">
                <span className="texto do botao">request your quote</span>
              </a>
          </div>
        </div>
        
      </section>

      <section className="sobrenos-container" id = 'sobrenos'>
        <div className="conteudo">
          <h1 className="titulo-sobrenos">THE ART AND SCIENCE OF BETTER   CLEANING
          </h1>
          <h2 className="subtitulo-sobrenos">
          Keeping your home clean and safe is essential for your health.</h2>
          <span className="texto-sobrenos">A professional cleaning company committed to delivering comprehensive hygiene and organization solutions for homes and commercial spaces. Our highly trained team and modern equipment ensure impeccable environments, promoting comfort and well-being. Let us take care of the cleaning, allowing you to enjoy a healthy and inviting atmosphere.
          </span>

        </div>
        <div className="galeria">
          <img src={Imagem1} alt="imagem" />
          <img src={Imagem2} alt="imagem" />
          <img src={Imagem3} alt="imagem" />
          <img src={Imagem4} alt="imagem" />
          <img src={Imagem5} alt="imagem" />
          
        </div>
       
        
        
      </section>

      <section className="contato-container" id = 'contato'>
       
       <div className="mapa">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.1965313208752!2d-122.1773242!3d47.71943460000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013cd11a53d1f%3A0x66fd72362a8f0e35!2sLanda%20Cleaning%20Services!5e0!3m2!1spt-BR!2sbr!4v1691688744328!5m2!1spt-BR!2sbr" width="70%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

       </div>

       <div className="informacoes">
        <div className="box-informacoes">
          <span className="title-informacoes">Contact</span>
          <div className="box-botao-informacoes">
            <a href="tel:+1-425-647-5047" target="_blank">
              <span>Call Now</span>
            </a>
          </div>
          <span className="descricao-informacoes">(495) 647-5047</span>
          
          
        </div>
        <div className="box-informacoes">
          <span className="title-informacoes">Adress</span>
          <div className="box-botao-informacoes">
            <a href="https://www.google.com/maps/dir//Landa+Cleaning+Services/data=!4m8!4m7!1m0!1m5!1m1!1s0x549013cd11a53d1f:0x66fd72362a8f0e35!2m2!1d-122.1773242!2d47.7194346" target="_blank">
              <span>Get Directions</span>
            </a>
          </div>
          <span className="descricao-informacoes">
            13314 122nd Place Northeast
            Kirkland, WA 98034
            USA
          </span>
          
          
        </div>

        <div className="box-informacoes">
          <span className="title-informacoes">Business Hours</span>
          <ul className="lista-horarios">
            <li className="lista-horarios-itens">Monday: 7:00 AM – 6:00 PM</li>
            <li className="lista-horarios-itens">Tueday:	7:00 AM – 6:00 PM</li>
            <li className="lista-horarios-itens">Wednesday:	7:00 AM – 6:00 PM</li>
            <li className="lista-horarios-itens">Thursday:	7:00 AM – 6:00 PM</li>
            <li className="lista-horarios-itens">Friday:	7:00 AM – 6:00 PM</li>
            <li className="lista-horarios-itens">Saturday:	7:00 AM – 6:00 PM</li>
            <li className="lista-horarios-itens">Sunday:	10:00 AM – 4:00 PM</li>
          </ul>




        </div>
       </div>
       
     </section>

     <section className="avaliacoes-container" id = 'avaliacoes'>
      <span className="titulo-avaliacoes">Customer Reviews & Testimonials</span>
       <div className="container-avaliacoes">
         <div className="box-avaliacoes">
          <div className="header-avaliacoes">
            <div className="estrelas">
            &#11088;&#11088;&#11088;&#11088;&#11088;
            </div>
            <span className="data-avaliacao">3 months ago</span>
          </div>
          <span className="texto-avaliacao">The team has been cleaning our house every other week for over a year. They do a really great job. They pay attention to the details, they don't complain about the legos (we have 3 kids) or how it always takes us 10 minutes to fully get out of the way, they make the beds and fold the towels nicely. They wipe everything down and mop and vacuum. They leave our backdoor windows without handprints. They take the trash and recycling out and wipe down the outside of the kitchen cabinets and trash. Honestly, it's really a good clean, and they're very efficient. What I've appreciated the most is the easy communication, being timely and easy to coordinate with. There's no drama. They don't need oversight. They're understanding when the occasional scheduling conflict comes up for us. Day to day, they're always friendly and smiling and trustworthy. We've met a few of their team over the 1.5 years, and really everyone is kind and good. It's never awkward if we need to be around the house or...</span>
          <div className="nome-container"><span>- Sara K</span></div>
          
         </div>

         <div className="box-avaliacoes">
          <div className="header-avaliacoes">
            <div className="estrelas">
            &#11088;&#11088;&#11088;&#11088;&#11088;
            </div>
            <span className="data-avaliacao">a year ago</span>
          </div>
          <span className="texto-avaliacao">TI easily give Wilma and her team 5 stars, they were all professional and also personable and did a great job of deep cleaning my apartment for my move out … I highly recommend Landa Cleaning Services … nice to support locally owned businesses in the area. I am letting everyone I know in the area about this gem of a company!</span>
          <div className="nome-container"><span>- Nancy H</span></div>
          <div className="box-botao-avaliacoes">
            <a href="https://www.google.com/search?hl=pt-BR&gl=br&q=Landa+Cleaning+Services,+13314+122nd+Pl+NE,+Kirkland,+WA+98034,+Estados+Unidos&ludocid=7421213337944264245&lsig=AB86z5U2maG0bWajCIISv5cmhjwD#lrd=0x549013cd11a53d1f:0x66fd72362a8f0e35,1" target="_blank">
              <span className="texto do botao">View More reviews</span>
            </a>
          </div>
         </div>

         <div className="box-avaliacoes">
          <div className="header-avaliacoes">
            <div className="estrelas">
            &#11088;&#11088;&#11088;&#11088;&#11088;
            </div>
            <span className="data-avaliacao">3 years ago</span>
          </div>
          <span className="texto-avaliacao">Wilma is wonderful to work with. She is trustworthy and very communicative . She is open to suggestions and will accommodate my requests happily. She has been cleaning my home for almost 2 years now. I am happy with her work. The Landa Cleaning team does a fantastic job. I highly recommend them.</span>
          <div className="nome-container"><span>- Anuradha S</span></div>
          <div className="box-botao-avaliacoes">
            <a href="https://www.google.com/search?hl=pt-BR&gl=br&q=Landa+Cleaning+Services,+13314+122nd+Pl+NE,+Kirkland,+WA+98034,+Estados+Unidos&ludocid=7421213337944264245&lsig=AB86z5U2maG0bWajCIISv5cmhjwD#lrd=0x549013cd11a53d1f:0x66fd72362a8f0e35,1" target="_blank">
              <span className="texto do botao">View More reviews</span>
            </a>
          </div>
         </div>
         
        
       </div>
       
        
        
      </section>
     
      
    </>
  );
};

export default Home;
