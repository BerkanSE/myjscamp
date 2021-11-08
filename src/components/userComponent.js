import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi");

//Plug and play bir yapı sağladık.
let logger1 = new ElasticLogger();
//let logger1 = new MongoLogger();
//let logger1 = new BaseLogger();

let userService = new UserService(logger1);

let user1 = new User(1, "Berkan", "Senger", "Balıkesir");
let user2 = new User(2, "Ekin", "Senger", "Muğla");

//Kullanıcı ekleme
userService.add(user1)
userService.add(user2)

//Kullanıcı listeleme
console.log(userService.list())
//userService.list()

//Kullanıcı bilgilerin detayı
console.log(userService.getById(2));

//Prototyping --> Sonradan değer ekleme
//let customer = { id: 1, firstName: "Berkan" };
//customer.lastName = "Senger";
//console.log(customer.lastName);
