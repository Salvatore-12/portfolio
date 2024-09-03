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
import { FaGithub, FaLinkedin } from "react-icons/fa";





const Homepage = ()=>{
  const generatePDF = () => {
    const input = document.getElementById('pdfContent');
  
    html2canvas(input, {
      scrollY: -window.scrollY,
      scrollX: 0,
      backgroundColor: '#FAF3DD',
      scale: 2
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'px', [canvas.width ,canvas.height]);
  
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
      pdf.save('Myportfolio.pdf');

      document.body.classList.remove('pdf-mode');
    });
  };
    return(<>
       <div id='pdfContent'className='pt-4 pb-4'>
      <div className="MyBiografy">
      <h3 className='text-black'>Information:</h3> 
        <img src= {fotoProfilo} alt="immagine profilo" className='imageProfile' />
        <p>Ciao,sono Salvatore Assennato,un
           full-stack-developer disponibile a lavorare sia da remoto che in moalita ibrida.
           Mi piace lavorare in gruppo e sono appassionato di programmazione.
           Sono una persona precisa, attenta ai dettagli e orientato alla risoluzione dei problemi.
           Sono pronto a dare il massimo in ogni progetto a cui mi dedicherò. </p>
      </div> 

      <div className="Skills">
         <h3 className='text-black'>frontend skills:</h3>
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
         <h3 className='text-black'>backend skills:</h3>
         <img src={java} alt="logo" />
         <img src={spring} alt="logo" />
         <img src={intellij} alt="logo" />
         <img src={postman} alt='logo'></img>
         <img src={postgres} alt='logo'></img>
         
      </div>

      <div className="Skills">
         <h3 className='text-black'>tools of use:</h3>
         <img src={git} alt="logo" />
         <img src={github} alt="logo" />   
      </div>

<div className='projects'>
  <h3 className='mt-3 text-black'>My Projects:</h3>
  <div className='ContainerCards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={petshop} className="card-img-top" />
      <Card.Body className='FontStile'>
        <Card.Title className='fw-bold'>Pet-Shop</Card.Title>
        <Card.Text>
          Pet-shop per animali
        </Card.Text>
         <Button variant="success" className='rounded-4'><a href="https://github.com/Salvatore-12/pet-shop-frontend.git">Vai alla repo</a></Button>
      </Card.Body>
    </Card>
  </div>
    
  <div className='ContainerCards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={netflix} className="card-img-top" />
      <Card.Body className='FontStile'>
        <Card.Title className='fw-bold'>Site Netflix</Card.Title>
        <Card.Text>
          Creazione sito netflix
        </Card.Text>
        <Button variant="success" className='rounded-4'><a href="https://github.com/Salvatore-12/netflix-react.git">Vai alla repo</a></Button>
      </Card.Body>
    </Card>
  </div>

  <div className='ContainerCards'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={meteo} className="card-img-top"/>
      <Card.Body className='FontStile'>
        <Card.Title className='fw-bold'>app Meteo</Card.Title>
        <Card.Text>
          Applicazione per il meteo
        </Card.Text>
        <Button variant="success" className='rounded-4' ><a href="https://github.com/Salvatore-12/meteo-app.git">Vai alla repo</a></Button>
      </Card.Body>
     </Card>    
  </div>
 </div>
      <div className='tools fs-4'>
         <a href="https://github.com/Salvatore-12?tab=repositories" className=' me-2'><FaGithub />My Github</a>
         <a href="https://www.linkedin.com/in/salvatore-assennato-web-developer/"><FaLinkedin />Linkedin</a>
      </div>
</div>
      <div className='d-flex justify-content-center'>
      <Button variant="success" className='small-btn rounded-4 mb-3 me-3  d-flex justify-content-center align-items-center text-black fw-bolder fs-6' onClick={generatePDF}><p>Dowload portfolio</p></Button>
      <Button 
        variant="success" 
        className=' small-btn rounded-4 mb-3  d-flex justify-content-center align-items-center text-black fw-bolder'
        href="/Salvatore Assennato Curriculum Vitae aggiornato.pdf"
         download="Salvatore_Assennato_CV.pdf"
         >
          <p>Dowload CV</p>
          </Button>
      </div>
</>
)
}

export default Homepage