import React, { useContext } from 'react';
import DataContext from '../../../context/DataContext';
import { Modal, Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './DownloadBrochureModal.scss';

const DownloadBrochureModal = ({ onCancel, onConfirm }) => {
  const { name, mobileNumber, email, setName, setMobileNumber, setEmail } =
    useContext(DataContext);

  return (
    <Modal
      show
      centered
      enforceFocus={false}
      size='lg'
      onHide={onCancel}
      dialogClassName='download-brochure'
    >
      <Modal.Body>
        <div className='download-brochure-body'>
          <div className='d-flex justify-content-between w-100'>
            <span>Download Brochure</span>
            <i className='zwicon-close' onClick={onCancel} />
          </div>

          <div className='download-brochure-content-container'>
            <div className='fields-container'>
              <div className='field-row d-flex flex-direction-row'>
                <span>Name</span>
                <input
                  className='form-control input'
                  placeholder='Input name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='field-row d-flex flex-direction-row'>
                <span>Mobile Number</span>
                <PhoneInput
                  country={'ae'}
                  enableSearch
                  disableSearchIcon
                  countryCodeEditable={false}
                  searchPlaceholder='Search for a country'
                  value={mobileNumber}
                  onChange={(value) => setMobileNumber(value)}
                />
              </div>
              <div className='field-row d-flex flex-direction-row'>
                <span>E-mail</span>
                <input
                  className='form-control input'
                  placeholder='Input e-mail'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-end w-100'>
            <Button
              variant='outline-light'
              onClick={() => onConfirm(name, mobileNumber, email)}
            >
              Submit
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DownloadBrochureModal;
