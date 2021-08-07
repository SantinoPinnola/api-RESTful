
export default class Productos {
    constructor () {
        this.arrayProductos = []
    }

    guardar(data) {
        this.arrayProductos.push(data);
    }

    getProducto(idBrowse) {
        return this.arrayProductos.find(element => element.id == idBrowse);
    }

    leer() {
        return this.arrayProductos;
    }

    delete(idDel) {
        this.arrayProductos = this.arrayProductos.filter((element) => element.id != idDel);
    }
}


 