import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Paints } from "./Paints.js"
import { Interiors } from "./Interiors.js"
import { addCustomOrder } from "./database.js"
import { Orders } from "./Orders.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const CarsRus = () => {
    return `
        <h1>Cars 'R' Us</h1>
        <article class="choices">
            <section class="choices__paints options">
                ${Paints()}
            </section>
            <section class="choices__technologies options">
                ${Technologies()}
            </section>
            <section class="choices__wheels options">  
                ${Wheels()}
            </section>
            <section class="choices__interiors options">
                ${Interiors()}
        </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article>
          <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}

