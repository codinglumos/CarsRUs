import { getInteriors, setInteriors } from "./database.js";
const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            setInteriors(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    let html = `<h2>Interiors</h2>`
    html += `<select id="interior">`
    html += `<option value="0">Select an Interior Package</option>`
    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.choice}</option>`
    }

 html += `</select>`
 return html
}