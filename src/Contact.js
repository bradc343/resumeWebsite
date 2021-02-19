
import React, { Component } from 'react';
import BradsMenu from './BradsMenu';
import './contact.scss';
import $ from 'jquery'
import logo from './signature.svg';


class Contact extends Component {
  componentDidMount(){
    $(document).ready(function() {

      $("#submit").click(function(e) {
          e.preventDefault();

          var name = $("#name").val(),
              email = $("#email").val(),
              message = $("#message").val();

          $.ajax({
              type: "POST",
              url: 'https://r8xpob2etb.execute-api.us-east-2.amazonaws.com/Contactform',
              contentType: 'application/json',
              data: JSON.stringify({
                  'name': name,
                  'email': email,
                  'message': message
              }),
              success: function(res){
                  $('#form-response').text('Email was sent.');
                  
              },
              error: function(){
                  $('#form-response').text('Error.');
              }
          });

      })

    });
  }
  
  render() {
    let links = [
      { label: 'Home', link: 'Home' },
      { label: 'Resume', link: 'Resume' },
      { label: 'Products', link: 'Products' },
      { label: 'Contact', link: 'Contact', active: true },
    ];

    const Aux = (props) => {
      return props.children;
    };

    return (
      <Aux>
      <div className="container center">
        <BradsMenu links={links} logo={logo}/>
      </div>
      <div className="container center">
        <div className="wrapper">
          <div className="columncontact">              
            <div>
              <form>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="    Your last name.."/>
                </form>
              </div>
              
              <div>
                <form>
                  <label className="label1" htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="    Your email"/>
                </form>
              </div> 
            </div>
            <div className="columncontact">
                <div>
                <form>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="Message" placeholder="Write something.."></textarea>
                    <input type="submit" id="submit" value="Submit" />
                  </form>
                </div>
            </div>
          <div>
          <div id="form-response"></div>
         </div>
        </div>
        
        
      </div>
      </Aux>
    );
  }
}


export default Contact;
