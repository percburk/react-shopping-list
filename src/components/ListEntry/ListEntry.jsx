import './ListEntry.css';

function ListEntry({ item, deleteItem, purchaseItem }) {
  console.log(item);

  const handleDelete = () => {
    console.log('in handle delete');
    deleteItem(item);
  };

  const handlePurchaseItem = () => {
    purchaseItem(item);
    console.log(item.purchased);
  };

  return (
    <div className="entry">
      <p className="itemName">{item.name}</p>
      <p className="quantityUnit">
        {Number(item.quantity)} {item.unit}
      </p>
      <div className="buttonContainer">
        {item.purchased ? (
          <p className="purchased">Purchased!</p>
        ) : (
          <>
            <button
              className="material-icons buttonDone"
              onClick={handlePurchaseItem}
            >
              done
            </button>
            <button className="material-icons buttonEdit">create</button>
            <button
              onClick={handleDelete}
              className="material-icons buttonDelete"
            >
              clear
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ListEntry;
