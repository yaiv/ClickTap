import bcrypt from 'bcrypt';
/*
//Se requiere instalar en terminar npm install bcrypt
// Se va a requerir tambien intalar npm i --save-dev @types/bcrypt para que TypeScript reconozca los tipos de bcrypt

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);  //cadena de caracteres aleatorios
    return await brypt.hash(password, salt); //hashea la contraseña con el salt generado
    
} */

    //Revisar si la contraseña es correcta
    export const checkPassword = async (enteredPassword: string, realPassword: string) => {

    return enteredPassword === realPassword;
    }

