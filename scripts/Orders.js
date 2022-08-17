import { getOrders, getpaintColors, getInteriors, getTechnologies, getWheels} from "./database.js"

const buildOrderListItem = (order) => {
    const paintColors = getpaintColors()
    const wheels = getWheels()
    const technologies = getTechnologies()
    const interiors = getInteriors()

//Remember that the function you pass to find() must return true/false
const foundpaintColor = paintColors.find(
    (paintColor) => {
        return paintColor.id === order.paintColorId
    }
)

const foundwheel = wheels.find(
    (wheel) => {
        return wheel.id === order.wheelId
    }
)

const foundtechnology = technologies.find(
    (technology) => {
        return technology.id === order.technologyId
    }
)

const foundinterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
)

const totalCost = (foundpaintColor.price + foundtechnology.price + foundwheel.price + foundinterior.price)
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li class="customOrders">
        Order #${order.id} was placed on ${order.timestamp} and is for a ${foundpaintColor.choice} car with ${foundinterior.choice} interior, ${foundwheel.choice} wheels and ${foundtechnology.choice} technologies for a total cost of ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
