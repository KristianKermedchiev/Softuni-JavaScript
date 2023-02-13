# Cheat Sheet

1. Initialize project
2. Install & set up Express
    * add routes
    * add body parser
    * add static routes
3. Add view engine: express-handlebars
    * register with express
    * add views folder
    * add home template
    * add main layout - add {{{body}}} in the main layout file;
    * add partials template folder;
4. Add home controller;
    * add controller to routes;
5. Connect tos database;
    * set strictQuery / deprecation warning;
6. Authentication;
    * fix HTML links in layout;
    * add auth controller;
    * add register page;
    * add login page;
7. Add user model;
8. Add auth sevice;
9. Install bcrypt and cookie-parser and configure;
10. Register user;
    * validate repeatPassword;
    * check if user exists;
    * use bcrypt to hash passord;
11. Login user.
    * check if user exists;
    * check if password is valid;
12. Generate jwt token;
    * OPTIONAL: use util.promisify to convert JWT functionality;
    * generate token with payload;
    * add token to cookie;
13. Add authenication middleware;
    * add decoded token to request;
    * use authentication middleware;
14. Logout
15. Authorization middleware;
16. Dynamic navigation;
17. Eror handling (local error handling);
18. Add error notifications to main layout;
19. Login automatically after register;
20. Parse errors;




-----------------------
Navigation
Notification
parse mongoose errors