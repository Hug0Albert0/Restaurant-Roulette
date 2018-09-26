import React, { Component } from 'react';
import gaming from './gaming.png';
import './App.css';
import dbRef from './firebase.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faCoffee, faStar, faUserCircle} from '@fortawesome/free-solid-svg-icons'

import {
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Form,
  Nav,
  NavItem,
  NavLink,
  Table
} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      tipo: '',
      especialidad: '',
      ubicacion: '',
      telefono: '',
      encargado: '',
      horario: '',
      isPremium:true,
      adList: [],
      localesPremium: [],
      localesNormales: [],
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerLocal = this.registerLocal.bind(this);
    this.deleteAd = this.deleteAd.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }
    componentDidMount () {
    dbRef.child('locales')
         .on('value',(snapshot) => {
         let data = snapshot.val();
         if (data != null) {
           let arrSnap = Object.values(data);
           arrSnap.reverse();
           arrSnap.map((item,index) => {
              item.id = Object.keys(data).reverse()[index];
           })
           this.setState({ adList: arrSnap });
           this.state.adList.map(item => {
             if(item.isPremium===true) {
               this.setState({localesPremium:[...this.state.localesPremium, item]})
             } else if(item.isPremium===false) {
               this.setState({localesNormales: [...this.state.localesNormales,item]})
             }
           })
        } else {
          this.setState({ adList: [] });
        }
     });

     library.add(faStroopwafel)
     library.add(faCoffee)
     library.add(faStar)
     library.add(faUserCircle)
  }

  registerLocal () {
    const {
      nombre,
      tipo,
      especialidad,
      ubicacion,
      telefono,
      encargado,
      horario,
      isPremium
    } = this.state
    this.setState((prevState) =>  {
      return {
        nombre: '',
        tipo: '',
        especialidad: '',
        ubicacion: '',
        telefono: '',
        encargado: '',
        isPremium:true,
        horario: ''
      }
    })
    dbRef.child('locales').push({nombre,tipo,especialidad,ubicacion,telefono, encargado,isPremium,horario});
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleOptionChange(event) {
    if (event.target.value==='option1') {
      this.setState({isPremium:true});
    } else if (event.target.value==='option2') {
      this.setState({isPremium:false});
    }
  }


  handleSubmit (event) {
    //console.log(this.state);
    event.preventDefault();
  }

  deleteAd (id) {
    dbRef.child('locales').child(id).remove();
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={gaming} className="App-logo" alt="logo" />
          <div className='App-Titles'>
            <h1>Restaurant Roulette</h1>
            <h3>Sistema de Registro de Locales</h3>
          </div>
        </header>
       <Container fluid>
         <Row style={{padding: 30}}>
           <Col lg="4" style={{paddingBottom:20}}>
             <fieldset style={{padding:10,border:1 , borderStyle:"solid", borderRadius:5, display:'flex'}}>
               <Label style={{fontSize:25, textAlign:'center'}}>
                 Registrar Nuevo Restaurante
               </Label>
               <Form>
               <FormGroup>
                 <Label className="labelForm">Nombre del Local</Label>
                 <Input name="nombre" type='text' onChange={this.handleChange} value={this.state.nombre} required />
               </FormGroup>
               <FormGroup>
                 <Label className="labelForm">Tipo de Establecimiento</Label>
                 <Input name="tipo" type='text' onChange={this.handleChange} value={this.state.tipo} required />
               </FormGroup>
               <FormGroup>
                 <Label className="labelForm">Especialidad</Label>
                 <Input name="especialidad" type='text' onChange={this.handleChange} value={this.state.especialidad} required />
               </FormGroup>
               <FormGroup>
                 <Label className="labelForm">Ubicacion</Label>
                 <Input name="ubicacion" type='text' onChange={this.handleChange} value={this.state.ubicacion} required />
               </FormGroup>
               <FormGroup>
                 <Label className="labelForm">Telefono</Label>
                 <Input name="telefono" type='tel' onChange={this.handleChange} value={this.state.telefono} required />
               </FormGroup>
               <FormGroup>
                 <Label className="labelForm">Encargado</Label>
                 <Input name="encargado" type='text' onChange={this.handleChange} value={this.state.encargado} required />
               </FormGroup>
                  <Label className='labelForm'style={{paddingRight:10}}> Es Premium? </Label>
                  <div>
                    <input
                      type="radio"
                      value="option1"
                      style={{marginRight:5}}
                      checked={this.state.isPremium===true}
                      onChange={this.handleOptionChange} />
                    <label style={{paddingRight:20}}>Si</label>
                    <input
                      type="radio"
                      value="option2"
                      style={{marginRight:5}}
                      checked={this.state.isPremium===false}
                      onChange={this.handleOptionChange} />
                    <label>No</label>
                  </div>
               <FormGroup>
               </FormGroup>
               <FormGroup>
                 <Label>Horario de Atencion</Label>
                 <Input type='text' name="horario" onChange={this.handleChange} value={this.state.horario} required/>
               </FormGroup>
               <div style={{width:'100%',display:'flex', justifyContent:'flex-end'}}>
                  <Button size="md" onClick={this.registerLocal} color="success">Registrar</Button>
               </div>
             </Form>
             </fieldset>
           </Col>
           <Col>
             <h2 style={{textAlign:'center'}}>Lista de Establecimientos</h2>
             <Nav tabs>
               <NavItem>
                 <NavLink href="#" active>Locales: {this.state.adList.length} - Premium: {this.state.localesPremium.length} - Normales: {this.state.localesNormales.length}</NavLink>
               </NavItem>
             </Nav>
             <Table striped>
               <thead>
                 <tr style={{textAlign:'center'}}>
                   <th>Membresia</th>
                   <th>Nombre</th>
                   <th>Tipo</th>
                   <th>Especialidad</th>
                   <th>Ubicacion</th>
                   <th>Telefono</th>
                   <th>Encargado</th>
                   <th>Horario de Atencion</th>
                   <th></th>
                 </tr>
               </thead>
               <tbody>
              {
                this.state.adList.map((item, index) => {
                  return (
                    <tr key={index} style={{textAlign:'center'}}>
                      <td>{
                        item.isPremium===true? <FontAwesomeIcon icon="star"  size='lg'/>:<FontAwesomeIcon icon="user-circle"  size='lg'/>
                      }</td>
                      <th scope="row">{item.nombre}</th>
                      <td>{item.tipo}</td>
                      <td>{item.especialidad}</td>
                      <td>{item.ubicacion}</td>
                      <td>{item.telefono}</td>
                      <td>{item.encargado}</td>
                      <td>{item.horario}</td>
                      <td>
                        <Button size='sm' color='danger' onClick={() => this.deleteAd(item.id)}>
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  )
                })
              }
               </tbody>
             </Table>
           </Col>
         </Row>
       </Container>
      </div>
    );
  }
}

export default App;
