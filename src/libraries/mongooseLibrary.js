import { connect } from 'mongoose';
import { MONGO_DB_URI } from '../configuration/configuration.js';

export const databaseConnection = async () => {
  try {
    const db = await connect(MONGO_DB_URI);

    console.log(`Connected to ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
};
