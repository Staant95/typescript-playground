import { User } from ".";

/*
    Create a mapped type of T that has all the keys of T that are not of type function or object.
    Each value of a key is mapped to the key of the same name. { key1: "key1", key2: "key2" ... }
    { key1: "key1", key2: "key2" ... } [keyof T] => return a union of keys => "key1" | "key2" | ...
*/
type NonObjectKeys<T> = { 
    [K in keyof T]: T[K] extends object ? never : K 
} [keyof T];

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


// https://github.com/microsoft/TypeScript/issues/30188#issuecomment-506047803
type Path<T> = T extends infer Type
            ? { 
                [K in keyof T]: T[K] extends object 
                ? ConcatWithDot<K, Path<T[K]>>
                : K 
            } [keyof Type] 
            : "";

/*
    { 
        address: { 
            street: number, 
            zip: string 
        } 
    }

    { 
        [K in keyof T]: T[K] extends object 
        ? ConcatWithDot<K, Path<T[K]>> // <-- recursion
        : K 
    } [keyof T]

    T[address] is object ?

*/


const path1: Path<User>[] = ["id", "name", "address.street.name", "address.zipcode"];






