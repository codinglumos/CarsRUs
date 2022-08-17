import { getTechnologies, setTechnology} from "./database.js";
const techs = getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "tech") {
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = `<h2>Technologies</h2>`
    html += `<select id="tech">`
    html += `<option value="0">Select a Technology Package</option>`
    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.choice}</option>`
    }

 html += `</select>`
 return html
}