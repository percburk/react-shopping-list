function ListForm({
    handleSubmit,
    newItemName,
    setNewItemName,
    newItemQuantity,
    setNewItemQuantity,
    newItemUnit,
    setNewItemUnit
}) {
    console.log('in ListForm');
    return (
        <div>
            <h2>Add an Item</h2>
            <form onSubmit={handleSubmit}>
                <label>Item: </label>
                <input
                    type="text"
                    placeholder="item"
                    value={newItemName}
                    onChange={(event) => setNewItemName(event.target.value)}
                />
                <br></br>
                <label>Quantity: </label>
                <input
                    type="text"
                    placeholder="quantity"
                    value={newItemQuantity}
                    onChange={(event) => setNewItemQuantity(event.target.value)}
                />
                <label>Unit: </label>
                <input
                    type="text"
                    placeholder="quantity"
                    value={newItemUnit}
                    onChange={(event) => setNewItemUnit(event.target.value)}
                />
                <br></br>
                <button type="submit">Add Food</button>
            </form>
        </div>
    )
}


export default ListForm