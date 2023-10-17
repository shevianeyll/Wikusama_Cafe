const checkRole = (allowedRoles) => { //fungsi utama yang mengambil parameter ..
    return (req, res, next) => {
    const user = req.user; //mengambil informasi pengguna dari

        if(user && user.role && allowedRoles.includes(user.role)){
            next()
        } else {
            res.status(403).json({message : "Anda tidak memiliki akses"})
        }
    };
};

module.exports = {checkRole} //deklarasi ekspor modul