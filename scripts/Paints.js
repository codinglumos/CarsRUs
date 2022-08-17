import { getpaintColors, setPaintColors } from "./database.js";
const paints = getpaintColors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            setPaintColors(parseInt(changeEvent.target.value))
        }
    }
)

export const Paints = () => {
    let html = `<h2>Paints</h2>`
    html += `<select id="paint">`
    html += `<option value="0">Select Paint Colors</option>`
    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.choice}</option>`
    }

 html += `</select>`
 return html
}