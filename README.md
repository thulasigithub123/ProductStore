# ProductStore



project setup

![alt text](image.png)

`npm init -y`

`npm install express mongoose dotenv`




Express - webframework - to build API and routes
Mongoose - interact with Mongo DB
Dotenv - Access to our .env or environment variables





# backend 

- create entry point server.js in backend



Verify the setup

![alt text](image-1.png)



update `package.json` to `"dev": "node backend/server.js"` to call the application with `npm run dev`



for every change in backend application, install the package `nodemon` 

![alt text](image-2.png)
![alt text](image-4.png)
![alt text](image-3.png)



Test with first route ( homepage )
![alt text](image-5.png)
![alt text](image-6.png)



# setup mongo DB :

- organization
-  project
   - cluster ( free tier)
   - create a sample user and make as project owner
   - create a DB user and copy the connection string
   - mode of connection : driver Node => ( npm install mongodb)

![alt text](image-7.png)


![alt text](image-8.png)



##  Setup DB connection function and import in app,


![alt text](image-9.png)
![alt text](image-10.png)

![alt text](image-11.png)




