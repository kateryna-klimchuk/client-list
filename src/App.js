import "./App.css";
import { useState, useEffect } from "react";
import { fetchClientData } from "./services/API";

import ClientList from "./components/ClientList";
import Pagination from "./components/Pagination";
import Modal from "./components/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [showModal, setShowModal] = useState(null);

  const handleSizeChange = (event) => {
    const sizeValue = event.target.value;
    setSize(sizeValue);
  };

  const handlePageChange = (event) => {
    const buttonId = event.target.id;
    switch (buttonId) {
      case "decrement":
        setPage(page - 1);
        break;
      case "increment":
        setPage(page + 1);
        break;
      default:
        return;
    }
  };

  const handleShowModal = (userId) => {
    const user = users.find(
      (user) => user.customerIdentificationCode === userId
    );
    setShowModal({
      firstName: user.firstName,
      lastName: user.lastName,
      id: user.customerIdentificationCode,
      gender: user.gender,
      birthDay: user.birthDate,
    });
  };

  const handleCloseModal = () => {
    setShowModal(null);
  };

  useEffect(() => {
    fetchClientData(page, size).then((data) => setUsers(data));
  }, [page, size]);

  return (
    <div className="App">
      <ClientList users={users} openModal={handleShowModal} />
      <Pagination
        onSizeChange={handleSizeChange}
        onPageChange={handlePageChange}
        page={page}
      />
      {showModal && (
        <Modal
          closeModal={handleCloseModal}
          name={showModal.firstName}
          lastName={showModal.lastName}
          id={showModal.id}
          gender={showModal.gender}
          birthDay={showModal.birthDay}
        />
      )}
    </div>
  );
}

export default App;
