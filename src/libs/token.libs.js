import jwt from "jsonwebtoken";

export const CrearToken =  (payload) => {
  return new Promise((resolve,reject) => {
    jwt.sign(
    {
      id: payload,
    },
    "secret",
    {
      expiresIn: "1d",
    },
    (err, token) => {
      if (err) reject(err);
      resolve(token);
    }
  );
  }
  ) 
};

