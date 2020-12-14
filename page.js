function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    //this = color = {r: 10, g: 25, b: 30}
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    }
    return color;
}

const newColor = makeColor(10, 15, 200);

