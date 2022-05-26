
interface IRoleRepository{
    create(name:string):Promise<any>;
    findByName(name:string):Promise<any>;
    findAll():Promise<any>;
    getRoleIdByName(name:string):Promise<any>;
}
export {IRoleRepository}
