import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction){
    if (req.session && req.session.loggedIn){
        next();
    }else {
      res.redirect("/login");
    }
}

const router = Router();


router.get("/login", (req: Request, res: Response) => {
    res.send(`
    <form method="post" action"/login">
        <div>
        <label>Email</label>
        <input name="email" />
        </div>
        <div>
        <label>Password</label>
        <input name="password" type="password" />
        </div>
        <button>Submit</button>
    <form>
    `)
});


router.post('/login', (req: RequestWithBody, res: Response) => {

    const { email, password } = req.body;
    if (email && password && email === 'fawzi@gmail.com' && password === '1234') {
        // mark the person as logged in
        req.session = { loggedIn: true };
        res.redirect("/");
        // redirect them to the root route
    } else {
        res.send('Invalid email or password');
    }

});


router.get('/', requireAuth,(req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
        <div>
        <p>You're logged in</p>
        <a href='/logout'>Logout</a>
        </div>
        `);
    } else {
        res.send(`
        <div>
        <p>You're logged in</p>
        <a href='/logout'>Logout</a>
        </div>
        `);
    }
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect("/login");
});


router.get('protected', requireAuth, (req: Request, res: Response)=>{
    res.send("welcome to the protected world");
});

export { router };