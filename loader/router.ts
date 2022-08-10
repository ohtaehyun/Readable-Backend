import { Container } from "inversify";
import TYPES from '../constants/types';

// declare metadata by @controller annotation
import '../domain/home/controller';
import '../domain/user/controller';

// declare services;
import { UsersService } from "../domain/user/service";

export function initContainer() {

    // set up container
    const container = new Container();

    // set up bindings
    container.bind(TYPES.UsersService).to(UsersService);

    return container
}