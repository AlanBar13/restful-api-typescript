"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutesConfig = void 0;
//use abstract keyword to demand that the classes extended from this class have the configureRoutes function
class CommonRoutesConfig {
    constructor(app, name) {
        this.app = app;
        this.name = name;
        this.configureRoutes(); //make sure we have configureRoutes function
    }
    getName() {
        return this.name;
    }
}
exports.CommonRoutesConfig = CommonRoutesConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb21tb24vY29tbW9uLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNEdBQTRHO0FBQzVHLE1BQXNCLGtCQUFrQjtJQUlwQyxZQUFZLEdBQXdCLEVBQUUsSUFBWTtRQUM5QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLDRDQUE0QztJQUN4RSxDQUFDO0lBRUQsT0FBTztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0NBR0o7QUFmRCxnREFlQyJ9