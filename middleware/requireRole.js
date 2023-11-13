// middleware/auth.js

// Verifica si el usuario tiene el rol adecuado
const requireRole = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.rol)) {
            return res.status(403).json({ mensaje: 'Acceso prohibido para este rol' });
        }
        next();
    };
};

module.exports = requireRole;
