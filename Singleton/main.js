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