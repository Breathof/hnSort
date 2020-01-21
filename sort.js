class Element {
    constructor(athing, info, spacer, score){
        this.athing = athing;
        this.info = info;
        this.spacer = spacer;
        this.score = score
    }
}

var elements = new Array();
var regex = /\d+/;

getElements = () => {
    document.querySelectorAll('tr').forEach(tr => {
        if(tr.className == 'athing'){
            let element = new Element(tr, tr.parentNode.rows[ tr.rowIndex + 1 ], tr.parentNode.rows[ tr.rowIndex + 2 ], getScore(tr.parentNode.rows[ tr.rowIndex + 1 ]));

            elements.push(element)
        }
    });
}

sort = () => {
    elements.sort((a, b) => {
        if(getNumber(a) < getNumber(b)){
            return 1;
        } else {
            return -1;
        }
    });
}

getNumber = (input) => {
    return Number(input.info.getElementsByTagName("span")[0].innerHTML.match(regex))
}

getScore = (input) => {
    return Number(input.getElementsByTagName("span")[0].innerHTML.match(regex))
}

draw = () => {
    let pagespace = document.getElementsByClassName('itemlist');
    pagespace[0].innerHTML = "";
    elements.forEach(element => {
        pagespace[0].appendChild(element.athing);
        pagespace[0].appendChild(element.info);
        pagespace[0].appendChild(element.spacer);
    });
}

getElements();
sort();
draw();
