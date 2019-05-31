import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

export const Alert extends React.Component {

 const SweetAlert = require('react-bootstrap-sweetalert');
return

<SweetAlert
title={<span>HTML <small>Title</small>!</span>}
onConfirm={this.onConfirm}
>
<span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
</SweetAlert>

    
    
    
};