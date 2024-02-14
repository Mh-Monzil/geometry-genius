const calculateTriangle = document.getElementById("calculate-triangle");
calculateTriangle.addEventListener('click', () => {
    const baseInput = document.getElementById("base");
    const baseValue = parseFloat(baseInput.value);

    const heightInput = document.getElementById("height");
    const heightValue = parseFloat(heightInput.value);

    const area = 0.5 * baseValue * heightValue;

    const triangleResult = document.getElementById("triangle-result");
    triangleResult.innerText = area;
    baseInput.value = '';
    heightInput.value = '';
})