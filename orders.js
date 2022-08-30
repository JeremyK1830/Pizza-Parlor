// orders.js
const orders = [
    {
      id: 1,
      crust: "Hand",
      toppings: ["pepperoni", "green pepper"],
      instructions: "extra cheese"
    },
    {
      id: 2,
      crust: "Thin",
      toppings: ["Black Olives", "green pepper"],
      instructions: "half green peppers"
    }
  ]

  const getNewOrderId = () => {
    let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
  }
  export const addNewOrder = (order) => {
    const newId = getNewOrderId()
    order.id = newId
    orders.push(order)
    // Add logic to give the order the property id, which is equal to newId
    // Add logic to add the order object to the orders array
    
    // The below line creates and dispatches a new custom event titled "stateChanged".
    // We will still need to add a listener for this event.
    document.dispatchEvent(new CustomEvent("stateChanged"))
  }
  export const getOrders = () => {
    let ordersData = orders.map(order => ({...order}))
    return ordersData
}
  
  
  
   

