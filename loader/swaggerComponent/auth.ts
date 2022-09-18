export default {
    SignUpRequest: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                description: '아이디',
                example: 'test@test.com'
            },
            password: {
                type: 'string',
                description: '패스워드',
                example: 'PASS_WORD'
            },
            name: {
                type: 'string',
                description: '사용자명',
                example: 'khilkhil94'
            }
        }
    },
    LoginResponse: {
        type: 'object',
        properties: {
            accessToken: {
                type: 'string',
                description: '엑세스 토큰'
            },
            refreshToken: {
                type: 'string',
                description: '리프레쉬 토큰',
            }
        }
    }
}