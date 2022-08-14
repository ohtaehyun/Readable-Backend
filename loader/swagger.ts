import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import components from "./swaggerComponent/index";
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
    apis: ['./domain/*/controller.ts'],
};


export function initSwagger(app: any) {
    const specs = swaggerJSDoc(options);
    Object.assign(specs, components);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}