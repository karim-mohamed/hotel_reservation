exports.mongodbString = 'mongodb+srv://karim:ENGKMNO4@cluster0-maqxb.mongodb.net/test?retryWrites=true&w=majority'

exports.roles = ["USER", "STAFF", "ADMIN"]

exports.passportSecret = "SECRET!@#"

exports.generalApis = ['/login', '/signup']

exports.permissions = {
    USER: ['/available-rooms', '/available-tables', '/reserve-table', '/avail-table', '/reserve-meeting', '/end-meeting'],
    STAFF: ['/check-in', '/check-out'],
    ADMIN: ['/check-in', '/check-out']
}
