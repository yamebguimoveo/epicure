import jwt from 'jsonwebtoken';

export class AuthHandler { 
    async verify(token: string) {
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET||"SECRET");
            console.log(decoded);
            
            
        } catch (err) {
            throw err;             
        }
    }
}