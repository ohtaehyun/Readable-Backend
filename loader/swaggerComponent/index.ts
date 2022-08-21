import authSchema from './auth'
import clubSchema from './club'

function init() {
    const schemas = {};
    
    Object.assign(schemas, authSchema);
    Object.assign(schemas, clubSchema);
    
    const components = {
        components: {
            schemas
        }
    }
    return components;
}

export default init();