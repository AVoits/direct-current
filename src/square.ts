type SquareType = 'corner' | 'cross' | 'crossbar' | 'line' | 'root'| 'endpoint';
type SquareTypeIndex = 'c' | 'x' | 't' | 'l' | 'r'| 'e';


const matrix = [
    ['root', 'crossbar', 'corner', 'line'],
    ['corner', 'cross', 'line', 'crossbar'],
    ['corner', 'corner', 'cross', 'corner'],
    ['line', 'crossbar', 'corner', 'endpoint'],
];

interface SquarePosition {
    top: boolean;
    left: boolean;
    right: boolean;
    bottom: boolean;
}


function createSquare(type: string) {
    const div = document.createElement('div');
    div.className='square';
    div.innerHTML = getHtml(type);
    div.onclick = function() {
        rotate(div);
    };

    return div;
}

function rotate(element) {
    element.style.transform = 'rotate(90deg)';
}

function getHtml(type) {
    if (type === 'corner') {
        return `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60 40V0H40V40H0V60H40H60L60 40Z" fill="#868686"/>
</svg>`;
    }

    if (type === 'crossbar') {
        return `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 40H0V60H40L40 100H60V60H100V40H60H40Z" fill="#868686"/>
</svg>
`;
    }

    if (type === 'cross') {
        return `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 60V100H60V60H100V40H60V0H40V40H0V60H40Z" fill="#868686"/>
</svg>`;
    }

    if (type === 'line') {
        return `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="#DEDEDE"/>
<rect y="40" width="100" height="20" fill="#868686"/>
</svg>`;
    }
    if (type === 'root') {
        return `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.4049 60C66.6324 67.1367 59.1341 72 50.5 72C38.0736 72 28 61.9264 28 49.5C28 37.0736 38.0736 27 50.5 27C59.5317 27 67.3205 32.3214 70.902 40H100V60H70.4049Z" fill="#DF1C85"/>
</svg>`;
    }
    if (type === 'endpoint') {
        return `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" fill="#DEDEDE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.4049 60C66.6324 67.1367 59.1341 72 50.5 72C38.0736 72 28 61.9264 28 49.5C28 37.0736 38.0736 27 50.5 27C59.5317 27 67.3205 32.3214 70.902 40H100V60H70.4049Z" fill="#C4C4C4"/>
</svg>`;
    }

    return '<div>WTF???</div>'
}



for(let j = 0; j < matrix.length; j++) {
    const className = `line${j}`;
    document.querySelector('#playing-area').insertAdjacentHTML('beforeend', `<div class="${className}"></div>`)
    for(let n = 0; n < matrix.length; n++) {
        document.querySelector(`.${className}`).appendChild( createSquare(matrix[j][n]));
    }
    document.write("<br />");
}



class Square {

    constructor(public type) {}

    rotateSquare(event) {
        console.log('rotated');
    }

}

const square = new Square('corner');

// document.querySelector('#playing-area').insertAdjacentHTML('beforeend', square.getHtml());
