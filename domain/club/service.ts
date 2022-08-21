import { injectable } from "inversify";
import { ClubCreateRequest } from "./vo/request/clubCreateRequest";


@injectable()
export class ClubService {
    constructor() {}

    public async createClub(createRequestVo: ClubCreateRequest) {
        
    }
}