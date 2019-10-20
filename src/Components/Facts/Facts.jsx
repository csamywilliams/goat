import React, { Component } from 'react';
import { Layout, Fact, FactLayout } from './Facts.styles';
import { FaBug,  FaFileMedical, FaTractor, FaSyringe } from 'react-icons/fa';

class Facts extends Component {

  render() {

    return (
        <Layout>
          {/* <h2>Facts</h2> */}
          <FactLayout>
            <Fact>
              <FaFileMedical />
              <h3>CAE Clear</h3>
            </Fact>
            <Fact>
              <FaTractor />
              <h3>Disbudded</h3>
            </Fact>
            <Fact>
              <FaBug />
              <h3>Wormed</h3>
            </Fact>
            <Fact>
              <FaSyringe />
              <h3>Vaccinated</h3>
            </Fact>
          </FactLayout>
        </Layout>
    );
  }
 
}

export default Facts;