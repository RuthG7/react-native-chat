import { faker } from '@faker-js/faker'
import {Thread, User} from '../types/threads'



export function createRandomFollower(): User {
  const firstName = faker.person.firstName() ;
  const lastName = faker.person.lastName();
  const name = firstName + " " + lastName;

  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name,
    verifies: Math.random() > 0.5,
  bio: faker.person.bio(),
  username: faker.internet.userName(),
  link: faker.internet.url(),
  }
}

export function createRandomUser(): User {
  const firstName = faker.person.firstName() + " " +faker.person.lastName();

  return {
    id: faker.string.uuid(),
    photo: faker.image.avatar(),
    name: faker.person.firstName() + " " +faker.person.lastName(),
  verifies: Math.random() > 0.5,
  bio: faker.person.bio(),
  username: faker.internet.userName(),
  link: faker.internet.url(),
  followers: new Array(Math.floor(Math.random() * 10)).fill(null).map(createRandomFollower),
  }

}

export function createRandomThread(): Thread {
  const author = createRandomUser();
  const mentionUser = createRandomUser();

  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraphs(),
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    replies: new Array(Math.floor(Math.random() * 10)).fill(null).map(() => ({
      id: faker.string.uuid(),
      author: createRandomUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      createdAt: faker.date.recent().toISOString(),
    })),
    repliesCount: Math.floor(Math.random() * 1000),
    likesCount: Math.floor(Math.random() * 1000),
    mentionUser,
    createdAt: faker.date.recent().toISOString(),
  }
}
