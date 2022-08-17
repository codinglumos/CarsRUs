import { getWheels, setWheels } from "./database.js";
const wheels = getWheels()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            setWheels(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
    let html = `<h2>Wheels</h2>`
    html += `<select id="wheel">`
    html += `<option value="0">Select a Wheel Package</option>`
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.choice}</option>`
    }

 html += `</select>`
 return html
}

