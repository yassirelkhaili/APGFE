import React, { useEffect, useState} from 'react'
import axios from "axios"
import "../styles/admin.css"
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/esm/Spinner'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Admin = () => { 
  const [users, setusers] = useState([])
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)
  const [show, setShow] = useState(false);
  const [search, setsearch] = useState("")
  const api_url = "http://localhost/backend/controllers/Admin.php"
  const fetchData = async() => {
  await axios.get(api_url).then((res) => setusers(res.data)).catch((err)=>console.log(err))
  }
  const handleSearch = (e) => {
   setsearch(e.target.value)
  }
  useEffect(() => { 
    setloading(true)
    fetchData()
    setloading(false)
  }, [])
  const handleChange = (e) => {
setdata(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  const handleClick = () => {
    setloading(true)
    try {
      axios.post(api_url, JSON.stringify(data))
    } catch (err) {
      throw new Error(err)
    }
    setloading(false)
    setShow(false)
  }
  const handleDelete = async(id) => {
    setloading(true)
    try {
      await axios.delete(api_url + "/" + id)
    } catch (err) {
      throw new Error(err)
    }
    setloading(false)
  } 
  return (
    <div className='container-fluid'>
      <div className='row p-3 input-group'>
      <div className='search col-6'><input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Recherche D'utilisateurs" onChange={handleSearch}/></div>
      <div className='add-user col-6'><Button variant="primary" onClick={() => setShow(true)}>Ajouter un Utilisateur</Button></div>
      </div>
    <table className="table table-bordered">
          <thead>
            <tr className="bg-warning">
              <th scope="col" id="id" data-atr="id">id</th>
              <th scope="col" id="fname">Nom</th>
              <th scope="col" id="lname">Prenom:</th>
              <th scope="col" id="age">Email:</th>
              <th scope="col" id="pos">Role:</th>
              <th scope="col" id="action" data-atr="actions">Actions:</th>
            </tr>
          </thead>
          <tbody>
          {!loading && users.filter((user) => {
            const {id,nom,prenom,email,role} = user
            if (search === "") {
              return true
            } else if(JSON.stringify(id).includes(search) || nom.toLowerCase().includes(search.toLowerCase()) || prenom.toLowerCase().includes(search.toLowerCase()) || email.toLowerCase().includes(search.toLowerCase()) ||role.toLowerCase().includes(search.toLowerCase())) {
              return true
            }
          }).map((user) => {
            const {id,nom,prenom,email,role} = user
              return (
                <tr key={id}>
                  <th scope="row" id="id">
                    {id}
                  </th>
                  <td id="nom">{nom}</td>
                  <td id="prenom">{prenom}</td>
                  <td id="email">{email}</td>
                  <td id="role">{role}</td>
                  <td id="action" className="actions">
                    <button className="btn btn-warning" id='edit'>Edit</button>
                    <button className="btn btn-danger" id='delete' onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {loading && <Spinner animation="border" variant="warning" style={{marginLeft:"45vw"}}></Spinner>}
        </table>
        <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Veuillez saisir les Données</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nom:</Form.Label>
        <Form.Control type="email" placeholder="Nom" name="nom" onChange={handleChange} required/>
      </Form.Group>
      <Form.Group>
        <Form.Label>Prenom:</Form.Label>
        <Form.Control type="text" placeholder="Prenom" name="prenom" onChange={handleChange} required/>
      </Form.Group>
    </Form>
        </Modal.Body>
      <Form.Label className='select-label'>Role:</Form.Label>
      <Form.Select className='select' name="role" required onChange={handleChange}>
      <option value="étudiant">Étudiant</option>
      <option value="encadrant">Encadrant</option>
      <option value="jury">Jury</option>
    </Form.Select>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Fermer</Button>
          {loading ? <Spinner animation="border" variant="danger"></Spinner> : <Button variant="primary" onClick={handleClick}>Ajouter L'utilisateur</Button>}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Admin