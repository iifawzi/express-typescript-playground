"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
    }
    else {
        res.redirect("/login");
    }
}
var router = express_1.Router();
exports.router = router;
router.get("/login", function (req, res) {
    res.send("\n    <form method=\"post\" action\"/login\">\n        <div>\n        <label>Email</label>\n        <input name=\"email\" />\n        </div>\n        <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\" />\n        </div>\n        <button>Submit</button>\n    <form>\n    ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'fawzi@gmail.com' && password === '1234') {
        // mark the person as logged in
        req.session = { loggedIn: true };
        res.redirect("/");
        // redirect them to the root route
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', requireAuth, function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n        <div>\n        <p>You're logged in</p>\n        <a href='/logout'>Logout</a>\n        </div>\n        ");
    }
    else {
        res.send("\n        <div>\n        <p>You're logged in</p>\n        <a href='/logout'>Logout</a>\n        </div>\n        ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect("/login");
});
router.get('protected', requireAuth, function (req, res) {
    res.send("welcome to the protected world");
});
