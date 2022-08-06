import { Request, Response } from "express";
import { controller, httpGet, request, response } from "inversify-express-utils";

@controller("/basicAuth")
class BasicAuthController{
    @httpGet("/")
    private basicAuth(@request() request: Request, @response() response: Response){
        if(!request.headers.authorization){
            return this.basicAuthFail(response);
        } else {
            const userInfo = request.headers.authorization.split(' ')[1];

            if(!userInfo)
                return this.basicAuthFail(response);
            
            const decoded = Buffer.from(userInfo, 'base64').toString('utf8');
            const [userName, password] = decoded.split(":");

            if(userName === 'basic' && password === 'Auth')
                response.send('basic authenticated');
            
            return this.basicAuthFail(response);
        }
    }

    private basicAuthFail(response: Response){
        response.statusCode = 401;
        response.setHeader('WWW-Authenticate', 'Basic');
        response.end('Unauthorized');
    }
}