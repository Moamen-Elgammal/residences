import React, { useState, useContext } from 'react';
import DataContext from '../../../context/DataContext';
import { Table, Card, Button } from 'react-bootstrap';
import DownloadBrochureModal from '../../molecules/DownloadBrochureModal/DownloadBrochureModal';
import ApiService from '../../../services/ApiService';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import emailjs from '@emailjs/browser';
import './ResidencesTable.scss';

export default function ResidencesTable() {
  const residencesData = require('../../helpers/residences.json');

  const { name, mobileNumber, email, resetForm, setIsAdmin } =
    useContext(DataContext);
  const [showDownloadBrochureModal, setShowDownloadBrochureModal] =
    useState(false);

  const handleConfirm = async () => {
    const internationalFormat = mobileNumber
      ? parsePhoneNumberFromString('+' + mobileNumber).formatInternational()
      : mobileNumber;

    if (
      name === 'XXXX' &&
      mobileNumber === '00xxxx00' &&
      email === 'x@x.admin'
    ) {
      // TODO: Handle admin login
    } else {
      await ApiService.createLead({
        name: name,
        mobile_number: internationalFormat,
        email: email,
        status: 'New',
      });
    }

    emailjs
      .send(
        'service_dakga8q',
        'template_wkkextt',
        {
          name: name,
          mobile_number: mobileNumber,
          email: email,
        },
        'wIeQlVclZgxi-fevq'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    resetForm();
    setShowDownloadBrochureModal(false);
  };

  return (
    <>
      {showDownloadBrochureModal && (
        <DownloadBrochureModal
          onCancel={() => setShowDownloadBrochureModal(false)}
          onConfirm={handleConfirm}
        />
      )}

      <div className='residence-content-container'>
        <h1 className='residence-header'>{residencesData.name}</h1>
        <Card>
          <Card.Body>
            <p>{residencesData.developer}</p>
            <p>{residencesData.location}</p>
            <p>Delivery Date: {residencesData.delivery_date}</p>
            <p>Project Type: {residencesData.project_type}</p>
          </Card.Body>
        </Card>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Type</th>
              <th>Area</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {residencesData.residential_units.map((unit) => (
              <tr key={unit.type}>
                <td>{unit.type}</td>
                <td>
                  {unit.area.from} - {unit.area.to} m²
                </td>
                <td>
                  {unit.price.from} - {unit.price.to}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button
          variant='dark'
          className='download-button'
          onClick={() => setShowDownloadBrochureModal(true)}
        >
          Download Brochure
          <i className='zwicon-download' style={{ paddingLeft: '10px' }} />
        </Button>
      </div>
    </>
  );
}
