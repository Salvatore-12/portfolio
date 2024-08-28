import fotoProfilo from './images/FotoProfilo.png';
import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import bootstrap from './images/bootstrap.png'
import sass from './images/sass.png'
import Vscode from './images/Vscode.png'
import typescript from './images/ts.png'
import react from './images/react.png'
import redux from './images/redux.png'
import angular from './images/angular.png'
import java from './images/java.png'
import spring from './images/spring.png'
import intellij from './images/intellij.png'
import postman from './images/postman.png'
import postgres from './images/postgres.png'
import git from './images/git.png'
import github from './images/github.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import petshop from './images/Petshop.png'
import netflix from './images/netflix.png'
import meteo from './images/meteo.png'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';





const Homepage = ()=>{
  const generatePDF = () => {
    const input = document.getElementById('pdfContent');
    html2canvas(input, { scrollY: -window.scrollY }) // Aggiungi questo parametro per includere il contenuto fuori vista
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [canvas.width, canvas.height] // Imposta le dimensioni del PDF in base alle dimensioni del canvas
        });
  
        const marginTop = 20; // Imposta qui il margine superiore desiderato (in pixel)
        pdf.addImage(imgData, 'PNG', 0, marginTop);
        pdf.save('Myportfolio.pdf');
      });
  };
    return(<>
       <div id='pdfContent'>
      <div className="MyBiografy">
      <h3>Information:</h3> 
        <img src= {fotoProfilo} alt="immagine profilo" className='imageProfile' />
        <p>Ciao sono Salvatore Assennato,sono un full-stack-developer,ed sono disponibile a lavorare sia da remoto che ibrido,ed lavorare in gruppo.Amo fare programmazione,sono una persona ordinata ai dettagli e orientato alla risoluzione dei problemi.Dove darò il massimo del mio contributo,nei vari progetti che mi dedicherò. </p>
      </div> 

      <div className="Skills">
         <h3>frontend skills:</h3>
         <img src={html} alt="logo" />
         <img src={css} alt="logo" />
         <img src={javascript} alt="logo" />
         <img src={bootstrap} alt='logo'></img>
         <img src={sass} alt='logo'></img>
         <img src={Vscode} alt='logo'></img>
         <img src={typescript} alt='logo'></img>
         <img src={react} alt='logo'></img>
         <img src={redux} alt='logo'></img>
         <img src={angular} alt='logo'></img>

      </div>

      <div className="Skills">
         <h3>backend skills:</h3>
         <img src={java} alt="logo" />
         <img src={spring} alt="logo" />
         <img src={intellij} alt="logo" />
         <img src={postman} alt='logo'></img>
         <img src={postgres} alt='logo'></img>
         
      </div>

      <div className="Skills">
         <h3>tools of use:</h3>
         <img src={git} alt="logo" />
         <img src={github} alt="logo" />   
      </div>

  <div className='projects'>
  <h3>My Projects:</h3>
      <div className='ContainerCards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={petshop} className="card-img-top" />
      <Card.Body className='FontStile'>
        <Card.Title>Pet-Shop</Card.Title>
        <Card.Text>
        e-commerce di oggetti per animali
        </Card.Text>
        <Button variant="success" className='MyBtn'><a href="https://github.com/Salvatore-12/pet-shop-frontend.git">Vai alla repo</a></Button>
      </Card.Body>
    </Card>
    </div>
    
     <div className='ContainerCards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={netflix} className="card-img-top" />
      <Card.Body className='FontStile'>
        <Card.Title>Site Netflix</Card.Title>
        <Card.Text>
         creazione sito netflix
        </Card.Text>
        <Button variant="success" className='MyBtn'><a href="https://github.com/Salvatore-12/netflix-react.git">Vai alla repo</a></Button>
      </Card.Body>
    </Card>
    </div>

     <div className='ContainerCards'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={meteo} className="card-img-top"/>
      <Card.Body className='FontStile'>
        <Card.Title>app Meteo</Card.Title>
        <Card.Text>
          applicazione per il meteo
        </Card.Text>
        <Button variant="success" className='MyBtn'><a href="https://github.com/Salvatore-12/meteo-app.git">Vai alla repo</a></Button>
      </Card.Body>
     </Card>    
    </div>
 </div>
      <div className='tools'>
         <a href="https://github.com/Salvatore-12?tab=repositories">My Github</a>
        <a href="https://www.linkedin.com/in/salvatore-assennato-web-developer/">Linkedin</a>
        </div>
      </div>
      <Button variant="success" className='ButtonDownload rounded-4' onClick={generatePDF}>Scarica il PDF</Button>
     </>
)
}

export default Homepage