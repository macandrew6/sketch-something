function component() {
  const element = document.createElement('div');

    element.innerHTML = "Hello ebpack!!!!!";

  return element;
}

document.body.appendChild(component());