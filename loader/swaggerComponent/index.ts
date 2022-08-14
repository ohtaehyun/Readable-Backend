import authSchema from './auth'
function init() {
    const schemas = {};
    
    Object.assign(schemas, authSchema);
    
    const components = {
        components: {
            schemas
        }
    }
    return components;
}

export default init();