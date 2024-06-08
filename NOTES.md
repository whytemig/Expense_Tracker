Packages that were installed

'''
express express-session graphql @apollo/server @graphql-tools/merge bcryptjs connect-mongodb-session dotenv graphql-passport passport mongoose cors nodemon
'''

How do sessions work?

"
When a user logs in to a system and makes a login request to the server, the server will create a session and store it on the server’s local cache or in external storage (database).
Then, after finishing this process, the server responds to the client with a cookie.
The cookie usually contains a unique ID which is the session id and will be stored on the client browser for a limited time.
From this point, every request that will be sent to the server will include the browser cookies including the session cookie.
"
About Express-session

"
Express-session is an HTTP server-side framework that can be used to create and manage a session middlewar
"
