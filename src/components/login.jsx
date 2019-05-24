import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import validator from 'validator';
import { MDBBtn } from "mdbreact";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.emailLogin = React.createRef();
        this.passwordLogin = React.createRef();
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin() {
        const emailLogin = this.emailLogin.current.value;

        if (!validator.isEmail(emailLogin)) {
            alert('El email no es valido');
            return false;
        }

        const passwordLogin = this.passwordLogin.current.value;
        alert('La contraseña no es valida');

        if (validator.isLength(passwordLogin, { min: 6 })) {
            return false;
        }

    Login = () => {
        let data = {
            'email': email,
            'password': password
        }
    

     return fetch("http://10.105.105.137:8000/api/login", {
                method: 'get',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization' : 'Token' + this.state.user.token 
                }),
            })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
            if (resp.token){
                this.setState({user: {}, isAuthenticated: false})
            }else
                this.setState({errors: resp})
        };
    }

    render() {
        return (
            <div>
                <div className="rounded-left example z-depth-5 #c5cae9 indigo lighten-4jn" alt="100x100">    
                    <div className="border border-light p-5">
                        <div className="card-body">
                            <h2 className="font-weight-bold deep-orange-lighter-hover mb-3 .bounceIn">Inicio de sesión</h2>
                            <p className="card-text">
                            <div className="apasswordlign-self-baseline">
                                <div className="">
                                   <input type="email" ref={this.emailLogin} onChange="" id="defaultLoginFormEmail" className="form-control mb-4" />
                                    <input type="password" ref={this.passwordLogin} onChange="" id="defaultLoginFormPassword" className="form-control mb-4"r />
                                    <MDBBtn color="light-blue" onClick={this.handleClickLogin }>Ingresar</MDBBtn>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div>   
        </div>

        );
    };
    
    ;

render() {

    return (
        <fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            Dank memes
            </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    {
        (
        !this.state.isAuthenticated?
        <FormLogin email={this.state.email} password={this.state.password}
        onChangeEmail={this.onChangeEmail}
        onChangePassword={this.onChangePassword}
        onClick={this.onClick} />
        :
        <ListContacts contacts={this.state.contacts} onClick={this.ListContacts}/>
        )
    }
        </fragment>
    )

}
class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        email = serializer.validated_data['emial']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email
        })
        
export default class App extends components {
    constructor (props) {
        super (props);
        this.state = {
            contacts: []
            user: {}
            errors: {}
            isAuthenticated:false,
            email: "",
            password: "",
            
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.ListContacts = this.ListContacts.bind(this);
        this.Login = this.Login.bind(this);
        this.Logout = this.Logout.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    
    componentDidMount (){
        //this.login('joaco@nilo.cl', '1234567')
        
    }
}
export default Login;
