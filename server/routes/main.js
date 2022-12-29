import express from 'express';
import { createCountry, getAllCountries, getCountry, updateCountry, deleteCountry } from '../controllers/countries.js';

const router = express.Router();
router.post('/countries', createCountry);
router.get('/countries', getAllCountries);
router.get('/countries/:countryId', getCountry);
router.patch('/countries/:countryId', updateCountry);
router.delete('/countries/:countryId', deleteCountry);

export default router;