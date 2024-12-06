import { publishEvent, consumeEvent } from '../config/messagequeue';
import { updateUserDescriptionVector } from './databaseCRUD';


// Events to post
export async function publishUserDescriptionUpdated(UserDescriptionUpdate: string) {
  await publishEvent('user', 'DescriptionUpdated', UserDescriptionUpdate);
  console.log(`User description has been updated..`, UserDescriptionUpdate);
}

// Events to listen to
