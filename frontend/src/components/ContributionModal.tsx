import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ContributionModal(props: any) {

    const handleClose = () => props.onSetModal(false);

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Attribution</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Overlay image is a modified version of the Black Marble image from NASA, Which is available under creative commons.
        The original image can be found at <a
          href="https://earthobservatory.nasa.gov/features/NightLights/page3.php"
          target="_blank"
          rel="noopener noreferrer">
            NASA Earth Observatory
        </a>.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContributionModal;