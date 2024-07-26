QUESTION: 1 SOLUTION
Instrutions to Run the REST API - QUESTION: 1
1. cd RESTAPI
2. npm install (or) npm i
3. npm start (or) npm run dev (to run in development mode)

API ENDPOINTS: 
1. /categories/:categoryname/products - to get spefic kind of products (GET)
2. /categories/:categoryname/products/product/:id - to get single product details (GET)
3. /categories/:categoryname/products/:n - implementiation of pagination if n > 10 (GET)
4. /categories/:categoryname/products/discount - sorting by discount (GET)
5. /categories/:categoryname/products/price - sorting by price (GET)
6. /categories/:categoryname/products/ratings - sorting by ratings (GET)

I had Fetched the complete data from the provided test url `http://20.244.56.144/test` and stored everything
in a JSON file "/utils/testData.json". Temporarly i had created a fetch function and also assigned ids to the
objects in the data using "/utils/fetchData.js" > "addUniqueIdToJson" function.

Note: API outputs screenshots are being provided in "/outputs" folder

QUESTION: 2 SOLUTION
Not attempted due to lack of time (TIME-OUT), Network issues inside the institute (node_modules Installation)
