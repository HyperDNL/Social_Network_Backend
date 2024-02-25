import bcrypt from 'bcrypt';

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);

  return await bcrypt.hash(password, salt);
};

export const decryptPassword = async (password, encryptedPassword) => {
  return await bcrypt.compare(password, encryptedPassword);
};
