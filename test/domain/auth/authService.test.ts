import 'reflect-metadata';
import {describe, expect, it} from '@jest/globals';
import { connectDB, dropCollections, dropDB } from "../../lib/mongo";

// 시작전 메모리 몽고디비를 생성
beforeAll(async () => {
    await connectDB();
});

// 모두 끝난 후 메모리 몽고디비 삭제
afterAll(async () => {
    await dropDB();
});

// 각각의 테스트 마다 컬렉션 삭제
afterEach(async () => {
    await dropCollections();
});

import { AuthService } from '../../../domain/auth/service';
import Users from '../../../domain/user/model';
import { IUser } from '../../../domain/user/schema';
import SignUpReq from '../../../domain/auth/vo/request/signUpReq';

describe("AuthService 테스트", () => {
    it("sihnup 테스트", async () => {
        const signUpTestData = {
            email: "signup@test.com",
            password: "qwer1234",
            name: "test"
        } as IUser;

        const signUpReq = new SignUpReq(signUpTestData);
        const authService = new AuthService();

        await authService.signUp(signUpReq);
        const user = await Users.findByEmail(signUpReq.email);
        expect(user.email).toEqual(signUpReq.email);
    });
})