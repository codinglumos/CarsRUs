const database = {
paintColors: [
    { id: 1,
    choice: "Silver",
    price: 20
},

    { id: 2,
    choice: "Midnight Blue",
    price: 50
},

    { id: 3,
    choice: "Firebrick Red",
    price: 80
},

    { id: 4,
    choice: "Spring Green",
    price: 90
},
    ],

interiors: [
    { id: 1,
    choice: "Beige Fabric",
    price: 20
},
    
    { id: 2,
    choice: "Charcoal Fabric",
    price: 90
},
    
    { id: 3,
    choice: "White Leather",
    price: 60
},
    
    { id: 4,
    choice: "Black Leather",
    price: 70
},
    ],
    
technologies: [
    { id: 1,
    choice: "Basic Package (basic sound system)",
    price:200
},
        
    { id: 2,
    choice: "Navigation Package (includes integrated navigation controls)",
    price: 300
},
        
    { id: 3,
    choice: "Visibility Package (includes side and reat cameras)",
    price: 400
},
        
    { id: 4,
    choice: "Ultra Package (includes navigation and visibility packages)",
    price: 500
},
    ],

wheels: [
    { id: 1,
    choice: "17-inch Pair Radial",
    price: 200
},
            
    { id: 2,
    choice: "17-inch Pair Radial Black",
    price: 900
},
            
    { id: 3,
    choice: "18-inch Pair Spoke Silver",
    price: 600
},
            
    { id: 4,
    choice: "18-inch Pair Spoke Black",
    price: 700
},
    ],
customOrders: [
    { id: 1,
    paintColorId: 2,
    interiorId: 3,
    wheelId: 4,
    technologyId: 1,
    timestamp: 1515151515155
      
    }
],
orderBuilder: []
}

export const getpaintColors = () => {
    return database.paintColors.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const getBuilder = () => {
    return database.orderBuilder.map(builder => ({...builder}))
}

export const setPaintColors = (id) => { 
    database.orderBuilder.paintColorId = id
}

export const setInteriors = (id) => { 
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => { 
    database.orderBuilder.technologyId = id
}

export const setWheels = (id) => { 
    database.orderBuilder.wheelId = id
}

//Where should this go???- Orders or here?
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
