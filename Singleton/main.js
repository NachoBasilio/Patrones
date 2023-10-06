class Singleton {
    constructor(){
        if(Singleton.instance){
            return Singleton.instance;
        }

        console.log('Singleton created');

        Singleton.instance = this;
    }

    static getInstance(){
        if(Singleton.instance){
            return Singleton.instance;
        }

        return new Singleton();
    }
}

const singleton = new Singleton();


///Singleton DB

class DataBase {
    constructor(){
        if(DataBase.instance){
            return DataBase.instance;
        }

        console.log('DataBase created');


        this.host = 'localhost';
        this.username = "admin"
        this.password = "password"


        DataBase.instance = this;
    }

    query(sql){
        console.log("Ejecutando una consulta: " + sql)
    }

}

const db1 = new DataBase();
const db2 = new DataBase();

console.log(db1 === db2);

db1.query("Select * from clientes");
db2.query("Select * from productos");
