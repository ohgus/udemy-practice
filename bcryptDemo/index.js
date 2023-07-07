const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
    //     const salt = await bcrypt.genSalt(12);
    //     const hash = await bcrypt.hash(pw, salt)
    //     console.log(salt);
    //     console.log(hash);
    // }
    
const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = bcrypt.compare(pw, hashedPw);
    if(result) {
        console.log("logged in!");
    } else {
        console.log("try it again!");
    }
}

// hashPassword("shark");
login("shark", "$2b$12$chdF.1HqNlbP2cUEceWPu.tBRS0DExajzQjnQgiBkEMAwyfAWaoPi");