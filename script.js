//your JS code here. If required.

let levelElement = document.getElementById('level');
let domLevel = 0;

// Traverse the DOM tree upwards
while (levelElement) {
    domLevel++; // Increment level count for each parent
    levelElement = levelElement.parentNode; // Move to the parent node
}

alert("DOM Level of the element with ID 'level':", domLevel);
 