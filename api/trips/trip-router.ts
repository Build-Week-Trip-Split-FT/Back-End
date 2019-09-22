import { Request, Response, NextFunction } from 'express';
import Trips from './trip-model';
import TripMiddleware from './trip-middleware';
import Restricted from '../restricted-middleware';

const router = require('express').Router();

router
  .route('/:id')
  .all(TripMiddleware.validateTripId)
  .get((req: Request, res: Response): void => {
    res.status(200).json(req.trip);
  })
  .put(
    Restricted.restrictedByTrip,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const id = Number(req.params.id);
        const { destination, date, active } = req.body;
        const updated = await Trips.updateTrip(
          { destination, date, active },
          id
        );
        res.status(200).json(updated);
      } catch (err) {
        next(err);
      }
    }
  );

router
  .route('/:id/people')
  .all(TripMiddleware.validateTripId)
  .get(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const id = Number(req.params.id);
        const people = await Trips.getPeopleByTripId(id);
        res.status(200).json(people);
      } catch (err) {
        next(err);
      }
    }
  )
  .post(
    Restricted.restrictedByTrip,
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const id = Number(req.params.id);
        const saved = await Trips.addPersonToTrip(req.body, id);
        res.status(201).json(saved);
      } catch (err) {
        next(err);
      }
    }
  );

export default router;
