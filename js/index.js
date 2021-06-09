const ranges = document.querySelectorAll('.colorRange')
const background = document.querySelector('.colorField')
const text = document.querySelector('.colorText')
const changeColor = () => {
    const red = ranges[0].value
    const green = ranges[1].value
    const blue = ranges[2].value
    const redHEX = Number(red).toString(16)
    const greenHEX = Number(green).toString(16)
    const blueHEX = Number(blue).toString(16)
    text.innerHTML = `#${redHEX}${greenHEX}${blueHEX} (${red}, ${green}, ${blue})`
    // background.style.backgroundColor = `#${redHEX}${greenHEX}${blueHEX}`
    background.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}