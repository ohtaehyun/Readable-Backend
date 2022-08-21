export default {
    CreateClubRequest: {
        type: 'object',
        properties: {
            name: {
                type: 'string',
                description: '소모임 이름',
                example: '독서회'
            },
            description: {
                type: 'string',
                description: '소모임에 대한 설명',
                example: '주 1회 공부내용 발표'
            },
            category: {
                type: 'string',
                description: '선택된 카테고리 id',
                example: 'abcdefugh1234'
            }
        }
    }
}