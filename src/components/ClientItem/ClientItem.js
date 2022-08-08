import style from "./ClientItem.module.css";
const ClientItem = ({ id, name, lastName, onClick }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>
        <button
          className={style.itemButton}
          type="button"
          onClick={() => onClick(id)}
        >
          More information
        </button>
      </td>
    </tr>
  );
};

export default ClientItem;
