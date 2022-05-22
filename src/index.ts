export type User = {
    id: number;
    name: string;
    email: string;
    address: {
        street: {
            name: string;
        };
        city: string;
        zipcode: string;
    },
    whoAmI: () => string;
}