const path = "users/:userId/courses/:courseId/blabla/:asd"

type Params<T extends string, D extends string = '/'> = 
        T extends `${infer Prefix}${D}${infer Rest}`
        ? Prefix extends `:${infer Param}` 
            ? { [key in Param | keyof Params<Rest>]: string } 
            : Params<Rest>
        : T extends `:${infer Param}` 
            ? { [key in Param]: string } 
            : {}


declare function handleParams<Route extends string>(
    route: Route, 
    handler: (params: Params<Route>) => void
): void;


handleParams(path, params => {
    const {userId, courseId} = params;
}) 