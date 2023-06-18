function makeColor(r, g, b) {
    const color = {}; // 객체 생성
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() { // 메서드 생성
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    };
    color.hex = function() { // 메서드 생성
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color; // 객체 리턴
}
console.log(makeColor(20,105,255).hex());
console.log(makeColor(255,255,255).rgb());
