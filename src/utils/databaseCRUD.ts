import { AppDataSource } from "../config/database";
import { User } from "../entities/User";


export async function createUser(username: string, password: string, description?: string): Promise<Boolean> {
    !AppDataSource.isInitialized ? await AppDataSource.initialize() : null;

    let newUser = null;
    if (description) {
        newUser = new User(username, password, description);
    } else {
        newUser = new User(username, password);
    }
    
    const assignedId = await AppDataSource.getRepository(User).save(newUser);

    if (assignedId) {
        return true;
    } else {
        return false;
    }
}

export async function readUser(id: number): Promise<User | null> {
    !AppDataSource.isInitialized ? await AppDataSource.initialize() : null;
    const testEntity = await AppDataSource.getRepository(User).findOne({ where: { id } });

    if (testEntity) {
        return testEntity;
    } else {
        return null;
    }
}

export async function updateUserDescription(id: number, value: string): Promise<Boolean> {
    !AppDataSource.isInitialized ? await AppDataSource.initialize() : null;
    const testEntity = await AppDataSource.getRepository(User).findOne({ where: { id } });

    if (testEntity) {
        testEntity.description = value;
        const assignedId = await AppDataSource.getRepository(User).save(testEntity);
        if (assignedId) {
            return true;
        }
    }
    return false;
}

export async function updateUserDescriptionVector(id: number, value: string): Promise<Boolean> {
    !AppDataSource.isInitialized ? await AppDataSource.initialize() : null;
    const testEntity = await AppDataSource.getRepository(User).findOne({ where: { id } });

    if (testEntity) {
        testEntity.descriptionEmbed = value;
        const assignedId = await AppDataSource.getRepository(User).save(testEntity);
        if (assignedId) {
            return true;
        }
    }
    return false;
}


export async function deleteUser(id: number): Promise<Boolean> {
    !AppDataSource.isInitialized ? await AppDataSource.initialize() : null;
    const testEntity = await AppDataSource.getRepository(User).findOne({ where: { id } });

    if (testEntity) {
        const deletedEntity = await AppDataSource.getRepository(User).delete(id);
        if (deletedEntity) {
            return true;
        }
    }
    return false;
}