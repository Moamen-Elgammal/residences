import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@nextui-org/react';

import { useAppContext } from '@/context/app-context';

const DownloadBrochureModal: React.FC<{
  onCancel: () => void;
  onConfirm: (name: string, mobileNumber: string, email: string) => void;
}> = ({ onCancel, onConfirm }) => {
  const { name, mobileNumber, email, setName, setMobileNumber, setEmail } =
    useAppContext();

  const [touched, setTouched] = useState({
    name: false,
    mobileNumber: false,
    email: false,
  });

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <Modal isOpen={true} onClose={onCancel}>
      <ModalContent>
        <ModalHeader>Download Brochure</ModalHeader>
        <ModalBody>
          <Input
            autoFocus
            isRequired
            isInvalid={!name && touched.name}
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
          />
          <Input
            isRequired
            isInvalid={!mobileNumber && touched.mobileNumber}
            label='Mobile Number'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            onBlur={() => handleBlur('mobileNumber')}
          />
          <Input
            isRequired
            isInvalid={!email && touched.email}
            label='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='danger' variant='flat' onClick={onCancel}>
            Cancel
          </Button>
          <Button
            color='primary'
            onClick={() => onConfirm(name, mobileNumber, email)}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DownloadBrochureModal;
