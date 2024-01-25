import { PgsqlUserRepository } from "./pgsqlUserRepository";

import { AddUserUseCase } from "../aplication/addUserUseCase";
import { AdduserController } from "./controller/addUserController";

import { GetAllUsersUseCase } from "../aplication/getAllUserUseCase";
import { GetAllUserController } from "./controller/getAllUserController";

import { GetByNameUserController } from "./controller/getByNameUserController";
import { GetByNameUserUseCase } from "../aplication/getByNameUserUseCase";

export const pgsqlUserRepository = new PgsqlUserRepository();

export const addUserUseCase = new AddUserUseCase(pgsqlUserRepository);
export const addUserController = new AdduserController(addUserUseCase);

export const getAllUsersUseCase = new GetAllUsersUseCase(pgsqlUserRepository);
export const getAllUserController = new GetAllUserController(getAllUsersUseCase);


export const getByNameUserUseCase = new GetByNameUserUseCase(pgsqlUserRepository);
export const getByNameUserController = new GetByNameUserController(getByNameUserUseCase);