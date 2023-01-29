import Logica from './componentes/Logica/Logica';
import './Style.css';

function App() {

  return (
    <>

      <header>

        <h1>CONVERSOR DE MOEDAS</h1>
        <p><span className="span">Com base nos dados informados nessa aplicação, o usuário poderá obter a cotação em tempo real das principais moedas do mundo.</span></p>

      </header>

      <Logica />
    
      <footer>
        <p>
          <span className="span">CONTROLE DE FINANÇAS</span>
        </p>
        <p>
          <span className="span">
            Para maiores informações - clique no link abaixo para visualizar
            minhas redes sociais:
          </span>
        </p>

        <div className="social">
          <a href="https://www.facebook.com/JadsonSouzaSCR">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/jadson.souzza/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/jadson-souza-a6a130224/">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <p className="fim">© 2023 Copyright by Jadson Souza.</p>
      </footer>

    </>
  );
}

export default App;
