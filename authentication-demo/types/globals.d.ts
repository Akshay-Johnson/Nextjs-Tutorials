export {}

export type roles = 'admin' | 'moderator' ; 

declare global {
    interface CustomJwtSessionClaims {
        metadata : {
            roles?: Roles;
        }
    }
}