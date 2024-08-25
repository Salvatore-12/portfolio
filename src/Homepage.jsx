import fotoProfilo from './images/FotoProfilo.jpeg';
import html from './images/html.png'
import css from './images/css.jpeg'
import javascript from './images/javascript.png'
import bootstrap from './images/bootstrap.jpeg'
import sass from './images/sass.png'
import Vscode from './images/Vscode.png'
import typescript from './images/ts.png'
import react from './images/react.png'
import redux from './images/redux.png'
import angular from './images/angular.png'
import java from './images/java.png'
import spring from './images/spring.png'
import intellij from './images/intellij.jpeg'
import postman from './images/postman.png'
import postgres from './images/postgres.png'
import git from './images/git.png'
import github from './images/github.png'




const Homepage = ()=>{
    return(<>
       
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
      <div className='tools'>
         <a href="https://github.com/Salvatore-12?tab=repositories">My Github</a>
        <a href="https://www.linkedin.com/in/salvatore-assennato-web-developer/">Linkedin</a>
        </div>
  
      


   
     </>

)
}

export default Homepage