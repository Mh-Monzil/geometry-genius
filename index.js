// triangle 
function calculateTriangle(){
    const baseInput = document.getElementById("base");
    const baseValue = parseFloat(baseInput.value);

    const heightInput = document.getElementById("height");
    const heightValue = parseFloat(heightInput.value);

    const area = 0.5 * baseValue * heightValue;

    const triangleResult = document.getElementById("triangle-result");
    triangleResult.innerText = area;
    baseInput.value = '';
    heightInput.value = '';
}

// rectangle 
function calculateRectangle(){
    const widthInput = document.getElementById("width");
    const widthValue = parseFloat(widthInput.value);

    const lengthInput = document.getElementById("length");
    const lengthValue = parseFloat(lengthInput.value);

    const area = widthValue * lengthValue;

    const rectangleResult = document.getElementById("rectangle-result");
    rectangleResult.innerText = area;
    widthInput.value = '';
    lengthInput.value = '';
}

// parallel 
function calculateParallelogram(){
    const parallelBaseInput = document.getElementById("parallelogram-base");
    const parallelBaseValue = parseFloat(parallelBaseInput.value);

    const parallelHeightInput = document.getElementById("parallelogram-height");
    const parallelHeightValue = parseFloat(parallelHeightInput.value);

    const area = parallelBaseValue * parallelHeightValue;

    const parallelogramResult = document.getElementById("parallelogram-result");
    parallelogramResult.innerText = area;
    parallelBaseInput.value = '';
    parallelHeightInput.value = '';
}
