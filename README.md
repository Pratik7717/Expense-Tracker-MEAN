# Expense Tracker Developed using MEAN stack

>Web app to keep track of your income and expenses developed using MEAN stack and that uses cloud storage to store the transactions

  

# USAGE

**In client directory**


>`npm install`
>Run on http://localhost:4200 :
>` ng serve --open`
>Build for prod : 
>`ng build`
>Buld will be generated in server/public folder.

**In server directory**
> ```npm install```
> Run the server on port process.env.port | | 8081 : 
> ```
> npm start or
> node server.js
> ```

---
*Don't  forget to replace the .env file in server directory which will contain information of your **Mongodb atlas database credentials**.*
> .env file
>    -  DB_USER=`Your Atlasdb username`
>    -  DB_PASSWD=` Your Atlasdb password`
>    -   DB_NM=`Your Atlasdb name`

