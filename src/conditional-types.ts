import { User } from ".";


/*
    keyof T ==> are the keys and their type is string | symbol | number;
*/

type UserKeys = keyof User;
const t1: UserKeys = "address";


// Create a new type defined as a union of keys of the User type that are not of type function or object
// Note: a function extends object!
type NonObjectKeys<T> = { 
    [K in keyof T]: T[K] extends object ? never : K 
} [keyof T];


const nonObjectKey: NonObjectKeys<User>[] = ["name", "email", "id"];

// if a key is of primitive type just return, if it is an object, return the keys of that object
type NonObjectKeys2<T> = {
    [K in keyof T]: T[K] extends object ? keyof T[K] : K
}[keyof T];

const test: NonObjectKeys2<User> = "zipcode";

/* 

    if(K extends string) {
        if(P extends string) {
            if("" extends P) {  <---- if P is empty string return K else concatenate K and P with a dot
                {K}""{P}
            } else {
                {K}"."{P}
            }
        } else {
            never
        }
    } else {
        never
    }

*/

type ConcatWithDot<K, P> = K extends string 
                    ? P extends string
                    ? "" extends P ? K : `${K}.${P}`
                    : never
                    : never;

const cancat1: ConcatWithDot<"id", "zip"> = "id.zip";
const concat2: ConcatWithDot<"as", ""> = "as";

const concat3: ConcatWithDot<"address", ConcatWithDot<"street", "number">> = "address.street.number";


type Path<T> = T extends object 
            ? { 
                [K in keyof T]: T[K] extends object 
                ? ConcatWithDot<K, Path<T[K]>>
                : K 
            } [keyof T] 
            : "";




const path1: Path<User>[] = ["id", "name", "address.street.name"];






