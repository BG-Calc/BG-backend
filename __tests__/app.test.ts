// export {}
// import { Faction } from "../database/seeds/Models/factionsModel"
const request = require("supertest");
const app = require("../app");
const connect = require("../database/connection");
const testData = require("../database/test_data/index");
const { seedDatabase, closeDB } = require("../database/seeds/seed")

const { factionData, gamesData, usersData } = testData;

beforeAll(async () => await connect());
beforeEach(async () => await seedDatabase(factionData, usersData, gamesData));
afterAll(async () => await closeDB())
// factionData: Faction

describe('test express app', () => {
    describe('/api', () => {
      describe('/allUsers', () => {
        test('GET /api/allUsers returns array of all users', async () => {
          const { body } = await request(app)
            .get('/api/allUsers')
            .expect(200);
  
        //   expect(status).toBe(200);
          expect(body).toHaveLength(3);
          expect(Array.isArray(body)).toBe(true);
          body.forEach((user) => {
            expect(user).toEqual(
                expect.objectContaining({
                name: expect.any(String),
                gamesPlayed: expect.any(Number),
                gamesWon: expect.any(Number),
                maxScore: expect.any(Number),
              })
            );
          });
        });
      });
    });
  });