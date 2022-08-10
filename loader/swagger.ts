import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"
const options = {
    swaggerDefinition: {
        openapi: '3.0.3',
        info: {
            title: 'Readable-Backend',
            version: '0.0.0',
            description: '',
        },
        servers: [
        ],
    },
    apis: ['./controllers/testController.ts'],
};


export function initSwagger(app: any) {
    const specs = swaggerJSDoc(options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}