/* eslint-disable no-undef */
import request from 'supertest';
import db from '../../database/db-config';
import server from '../server';
import Secrets from '../../config/secrets';

// Initiate the migrations for the testing environment
beforeAll(async () => {
  await db.migrate.latest();
  await db.seed.run();
});

describe('user-router.js', () => {
  describe('get user by id endpoint', () => {
    it('should get right user from database', async () => {
      const res = await request(server).get('/api/users/admin');
      expect(res.status).toBe(200);
      expect(res.body.username).toEqual(Secrets.admin);
    });

    it('should fail on invalid entry', async () => {
      const res = await request(server).get('/api/users/bongo');
      expect(res.status).toBe(404);
    });
  });

  describe('get trip by user_id endpoint', () => {
    it('should get trips by user_id', async () => {
      const res = await request(server).get('/api/users/admin/trips');
      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
    });
  });

  describe('add trip to user endpoint', () => {
    it('should refuse if not authorized', async () => {
      const res = await request(server)
        .post('/api/users/admin/trips')
        .send({});
      expect(res.status).toBe(401);
    });

    it('should add trip to user', async () => {
      const { token } = (await request(server)
        .post('/api/auth/login')
        .send({
          username: Secrets.admin,
          password: Secrets.adminPassword,
        })).body;
      const addTrip = await request(server)
        .post('/api/users/admin/trips')
        .set('Authorization', token);
      expect(addTrip.status).toBe(201);
      const getTrips = await request(server).get('/api/users/admin/trips');
      expect(getTrips.status).toBe(200);
      expect(getTrips.body).toHaveLength(2);
    });
  });
});
