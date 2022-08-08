import ClientItem from "../ClientItem/index";

import style from "./ClientList.module.css";

const ClientList = ({ users, openModal }) => {
  return (
    <table className={style.container}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <ClientItem
            key={item.id}
            name={item.firstName}
            lastName={item.lastName}
            onClick={openModal}
            id={item.customerIdentificationCode}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ClientList;
