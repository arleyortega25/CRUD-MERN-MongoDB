import jwt from "jsonwebtoken";
export const autenticar = (req, res, next) => {
  const cookie = req.cookies.token;
  if (!cookie) return res.status(401).json({ message: "no autorizado" });
  jwt.verify(cookie, "secret", (error, user) => {
    if (error)
      return res.status(401).json({ message: "usuario no encontrado" });
    req.user = user;
    next();
  });
  
};
