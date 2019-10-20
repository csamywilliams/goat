import React, { Component } from 'react';
import { PrimaryButton} from '../UI/Components.styles';
import { Layout, Form, Map, Input, Textarea, H3, SendButton } from './Contact.styles';
import { FaPray } from 'react-icons/fa';

class Contact extends Component {

  render() {

    return (
        <Layout>
          {/* <h2>Contact Us</h2> */}
          <Form>
            <H3>Get in Touch.</H3>
            <Input type="text" id="name" placeholder="Full name" />
            <Input type="text" id="email" placeholder="Email address" />
            <Textarea id="enquiry" placeholder="Message..." rows="10" cols="50"/>
            <SendButton>Send</SendButton>
          </Form>
        </Layout>
    );
  }
 
}

export default Contact;