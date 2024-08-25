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



const Homepage = ()=>{
    return(<>
       
      <div className="MyBiografy">
      <h3>Information:</h3> 
        <img src= {fotoProfilo} alt="immagine profilo" className='imageProfile' />
        <p>Ciao sono Salvatore Assennato,sono un full-stack-developer,ed sono disponibile a lavorare sia da remoto che ibrido,ed lavorare in gruppo.Amo fare programmazione,sono una persona ordinata ai dettagli e orientato alla risoluzione dei problemi.Dove darò il massimo del mio contributo,nei vari progetti che mi dedicherò. </p>
      </div> 

      <div className="MyBiografy2">
         <h3>front end skills:</h3>
         <img src={html} alt="logo" />
         <img src={css} alt="logo" />
         <img src={javascript} alt="logo" />
         <img src={bootstrap} alt='logo'></img>
         <img src={sass} alt='logo'></img>
         <img src={Vscode} alt='logo'></img>
         <img src={typescript} alt='logo'></img>
         <img src={react} alt='logo'></img>
         <img src={redux} alt='logo'></img>

      </div>
   
     </>

)
}

export default Homepage