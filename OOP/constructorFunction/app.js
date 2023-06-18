function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

new Color(150,250,15);

Color.prototype.rgb = function() { // 메서드 생성
    const {r,g,b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};
Color.prototype.hex = function() {
    const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
};
Color.prototype.rgba = function(a = 1.0) {
    const {r,g,b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const color1 = new Color(40,255,60);
const color2 = new Color(0,0,0);

document.body.style.backgroundColor = color1.rgba(0.5);