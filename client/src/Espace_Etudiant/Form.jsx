import React,{useState} from 'react'
import "../styles/StyleForm.css"
function Form() {
    const [titre,setTitre]=useState('');
    const [description,setDescription]=useState('');
    const [nom,setNom]=useState('');
    const [encadrant,setEncadrant]=useState('');
    const [file,setFile]=useState('');
  return (<>
  
    <div class="formstudent">
    <div class="container">
        <div class="container-form">
            <h1>Projects Etudiant</h1>
            <form id="student-form" >
                <div class="form-item">
                    <label for="name">Titre de Project :{titre===""?<em style={{color:'red'}}>(*)</em>:null}</label>
                    <input type="text" id="titre_project" onChange={(e)=>setTitre(e)}/>
                    
                </div>
                <div class="form-item">
                    <label for="student-id">Description :{description===""?<em style={{color:'red'}}>(*)</em>:null}</label>
                    
                    <textarea name="message" onChange={(e)=>setDescription(e)} placeholder="Votre Description" class="main-input" id="project_descipt"></textarea>
                    
                </div>
                <div class="form-item">
                    <label for="department">Nom d'Etudiant :{nom===""?<em style={{color:'red'}}>(*)</em>:null}</label>
                    <input type="text" id="nom_etudiant" onChange={(e)=>setNom(e)}></input>
                    
                </div>
                <div class="form-item">
                    <label for="department">Nom de Binôme</label>
                    <input type="text" id="nom_binom"/>
                </div>
                <div class="form-item">
                    <label for="department">Nom L'Encadrant :{encadrant===""?<em style={{color:'red'}}>(*)</em>:null}</label>
                    <input type="text" id="nom_encadr" onChange={(e)=>setEncadrant(e)}/>
                    
                </div>
                <div class="form-item">
                    <label for="department">Poser Le Fichier :{file===""?<em style={{color:'red'}}>(*)</em>:null}</label>
                    <input type="file" id="file_project" onChange={(e)=>setFile(e)}/>
                    
                </div>
                <div class="form-item">
                    <input type="submit" value="Ajouter Le Project"/>
                    <label style={{color:'green'}}>Remarque :<br/>
                     Tous les champs avec le symbole * sont obligatoires le reste optionnel</label>
                </div>
            </form>
        </div>
    </div>
</div></>
    
  )
}

export default Form
