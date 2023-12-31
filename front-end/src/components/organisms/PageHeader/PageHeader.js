import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../../context/DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './PageHeader.scss';

const PageHeader = () => {
  const { isAdmin } = useContext(DataContext);

  return (
    <Navbar
      bg='light'
      expand='lg'
      sticky
      style={{
        padding: '20px 30px',
        borderBottom: '1px solid #f2f2f2',
        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Container style={{ minWidth: '100%' }}>
        <Navbar.Brand>
          <img
            src='https://img.icons8.com/ios/50/000000/skyscrapers.png'
            height='30'
            alt=''
            loading='lazy'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto w-100 justify-content-between'>
            <Link
              className='nav-link'
              to='/Residences'
              style={{
                fontSize: '18px',
                fontFamily: 'tahoma',
                fontWeight: 400,
              }}
            >
              Residences
            </Link>
            {isAdmin && (
              <Link
                className='nav-link'
                to='/controling'
                style={{
                  fontSize: '18px',
                  fontFamily: 'tahoma',
                  fontWeight: 400,
                }}
              >
                Controling
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PageHeader;
