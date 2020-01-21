const createUser = {
    first_name: "required|string",
    last_name: "required|string",
    email: "required|email",
    password: "required|string|minLength:3",
    date_of_birth: "required|date",
    telephone: "required|string",
    country: "required|string",
}

module.exports = {
    createUser
}