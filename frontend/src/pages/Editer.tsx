import React from "react";
import * as AiIcons from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Editor() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <h1>Menu</h1>
      {/* <SidebarButton name="HELLO" buttonStyle="btn--default"/> */}
      <AiIcons.AiFillPlusCircle
        className="sidebar-items"
        onClick={() => setModalShow(true)}
      >
        Launch vertically centered modal
      </AiIcons.AiFillPlusCircle>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Editor;
