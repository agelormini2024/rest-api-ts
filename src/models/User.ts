export interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
    createdAt: string;
}

let users: IUser[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@email.com', age: 25, createdAt: new Date().toISOString() },
    { id: 2, name: 'María García', email: 'maria@email.com', age: 30, createdAt: new Date().toISOString() },
    { id: 3, name: 'Carlos López', email: 'carlos@email.com', age: 28, createdAt: new Date().toISOString() },
];

let nextId = 4;

export class User {
    static findAll(): IUser[] {
        return users;
    }

    static findById(id: number): IUser | undefined {
        return users.find((u) => u.id === id);
    }

    static create(data: Omit<IUser, 'id' | 'createdAt'>): IUser {
        if (users.some((u) => u.email === data.email)) {
            throw new Error('El email ya está registrado');
        }
        const user: IUser = {
            ...data,
            id: nextId++,
            createdAt: new Date().toISOString(),
        };
        users.push(user);
        return user;
    }

    static update(id: number, data: Partial<Omit<IUser, 'id' | 'createdAt'>>): IUser | undefined {
        const user = users.find((u) => u.id === id);
        if (!user) return undefined;
        Object.assign(user, data);
        return user;
    }

    static delete(id: number): boolean {
        const index = users.findIndex((u) => u.id === id);
        if (index === -1) return false;
        users.splice(index, 1);
        return true;
    }
}
