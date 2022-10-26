const bodyElement = document.getElementsByTagName('body')[0];
const lineElements = document.querySelectorAll('.block-group .horizontal-line')
console.log(bodyElement, lineElements);
const rsLeftElement = document.querySelector('.resume-left');
const blockElement = document.querySelector('.resume-left .block-group');
const horizontalLineElements = document.querySelectorAll('.resume-left .block-group .horizontal-line')

const lineElement = document.createElement('div');
lineElement.classList.add('horizontal-line');

if (window.innerWidth <= 1000) {
    console.log(window.innerWidth)
    lineElements.forEach((line) => {
        console.log(line)
        line.classList.add('d-none')
    })
}


window.addEventListener("resize", () => {
    console.log(window.innerWidth)
    if (window.innerWidth && window.innerWidth <= 1000) {
        lineElements.forEach((line) => {
            console.log(line)
            line.classList.add('d-none')
        })
    } else {
        lineElements.forEach((line) => {
            console.log(line)
            line.classList.remove('d-none')
        })
    }
})