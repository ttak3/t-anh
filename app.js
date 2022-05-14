class HinhTron {
    constructor(banKinh) {
        this.PI = 3.14;
        this.dienTich = () => {
            return this.PI * this.banKinh * this.banKinh;
        };
        this.chuVi = () => {
            return 2 * this.PI * this.banKinh;
        };
        this.banKinh = banKinh;
    }
}
class HinhTru extends HinhTron {
    constructor(banKinh, chieuCao) {
        super(banKinh);
        this.dienTichXQ = () => {
            return 2 * this.PI * this.banKinh * this.chieuCao;
        };
        this.dienTichTP = () => {
            return 2 * this.PI * this.banKinh * this.chieuCao + 2 * this.PI * this.banKinh * this.banKinh;
        };
        this.theTich = () => {
            return this.PI * this.banKinh * this.banKinh * this.chieuCao;
        };
        this.chieuCao = chieuCao;
    }
}
var hinhTru1 = new HinhTru(3, 15);
console.log(hinhTru1.dienTichXQ());
console.log(hinhTru1.dienTichTP());
console.log(hinhTru1.theTich());
