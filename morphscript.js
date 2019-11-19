

alert('The Dewey Decimal Cards to the left contain a title to a small story, the frist line (Fl) of the story, and the last like (Ll) of the story. You can drag the cards around the screen to fully see them. To read the full text, double click the header -- single click the header to return to the front of the card.');

//Make the DIV element draggagle:
dragElement(document.getElementById("mydiv"));
dragElement(document.getElementById("mydivtwo"));
dragElement(document.getElementById("mydivthree"));
dragElement(document.getElementById("mydivfour"));
dragElement(document.getElementById("mydivfive"));
dragElement(document.getElementById("mydivsix"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function flipone() {
	document.getElementById('mydivonebod').className="hidden";
	document.getElementById('iframerussian').className="show iframe";
}

function flipbackone() {
	document.getElementById('mydivonebod').className="show";
	document.getElementById('iframerussian').className="hidden iframe";
}

function fliptwo() {
	document.getElementById('mydivtwobod').className="hidden";
	document.getElementById('iframebook').className="show iframe";
}

function flipbacktwo() {
	document.getElementById('mydivtwobod').className="show";
	document.getElementById('iframebook').className="hidden iframe";
}

function flipthree() {
	document.getElementById('mydivthreebod').className="hidden";
	document.getElementById('iframeread').className="show iframe";
}

function flipbackthree() {
	document.getElementById('mydivthreebod').className="show";
	document.getElementById('iframeread').className="hidden iframe";
}

function flipfour() {
	document.getElementById('mydivfourbod').className="hidden";
	document.getElementById('iframesis').className="show iframe";
}

function flipbackfour() {
	document.getElementById('mydivfourbod').className="show";
	document.getElementById('iframesis').className="hidden iframe";
}

function flipfive() {
	document.getElementById('mydivfivebod').className="hidden";
	document.getElementById('iframelang').className="show iframe";
}

function flipbackfive() {
	document.getElementById('mydivfivebod').className="show";
	document.getElementById('iframelang').className="hidden iframe";
}

function flipsix() {
	document.getElementById('mydivsixbod').className="hidden";
	document.getElementById('iframefinale').className="show iframe";
}

function flipbacksix() {
	document.getElementById('mydivsixbod').className="show";
	document.getElementById('iframefinale').className="hidden iframe";
}