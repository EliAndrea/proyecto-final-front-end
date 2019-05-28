import Login from 'loin.jsx';
 
 export default class Internal extends components {
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