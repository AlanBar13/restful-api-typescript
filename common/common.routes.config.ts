import express from 'express'
//use abstract keyword to demand that the classes extended from this class have the configureRoutes function
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string){
        this.app = app;
        this.name = name;
        this.configureRoutes(); //make sure we have configureRoutes function
    }

    getName(){
        return this.name;
    }

    abstract configureRoutes(): express.Application;
}