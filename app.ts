class HinhTron{
    banKinh: number;
    PI: number=3.14;

    constructor(banKinh: number){
        this.banKinh=banKinh;
    }

    dienTich = ()=>{
        return this.PI * this.banKinh * this.banKinh;
    }


    chuVi = ()=>{
        return 2 * this.PI * this.banKinh;
    }
}


class HinhTru extends HinhTron{
    chieuCao : number;

    constructor(  banKinh : number ,chieuCao : number){
        super(banKinh);
        this.chieuCao=chieuCao;
    }

    dienTichXQ = () =>{
        return  2 * this.PI * this.banKinh* this.chieuCao;
    }

    dienTichTP = () =>{
        return 2 * this.PI * this.banKinh* this.chieuCao + 2* this.PI * this.banKinh*this.banKinh;
    }

    theTich = ()=>{
        return this.PI * this.banKinh * this.banKinh * this.chieuCao;
    }
}


var hinhTru1 = new HinhTru(3,15);
console.log(hinhTru1.dienTichXQ());
console.log(hinhTru1.dienTichTP());
console.log(hinhTru1.theTich());