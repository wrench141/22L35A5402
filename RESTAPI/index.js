const express = require("express");
const cors = require("cors");

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors());

const api = "http://20.244.56.144/test";


//i have fetched complete products data from the given api due to lack of proper authorization and fetch requests and i have stored the data in the testData.json file

const getData =  (categoryname) => {
    const data = require("./utils/testData.json").filter(
      (product) => product.productName.split(" ")[0] == categoryname
    );
    return data;
}

app.get("/categories/:categoryname/products", (req, res) => {
    try {
        const categoryname = req.params.categoryname;
        const data = getData(categoryname);   
        const responseData = data.sort((a, b) => b.rating - a.rating);     
        res.status(200).json({"data": responseData});   
    } catch (error) {
        console.log(error)
        res.status(400).json({"msg": "something went wrong"})
    }
})


app.get("/categories/:categoryname/products/ratings", (req, res) => {
    try {
        const categoryname = req.params.categoryname;
        const data = getData(categoryname);   
        
        const sortedData = data.sort((a, b) => b.rating - a.rating);
        res.status(200).json({ data: sortedData });

    } catch (error) {
        console.log(error)
        res.status(400).json({"msg": "something went wrong"})
    }
})

app.get("/categories/:categoryname/products/price", (req, res) => {
    try {
        const categoryname = req.params.categoryname;
        const data = getData(categoryname);   
        
        const sortedData = data.sort((a, b) => a.price - b.price);

        res.status(200).json({ data: sortedData });

    } catch (error) {
        console.log(error)
        res.status(400).json({"msg": "something went wrong"})
    }
})

//invalid due to lack of company names but if we assign then this will work for sure
app.get("/categories/:categoryname/products/company", (req, res) => {
    try {
        const categoryname = req.params.categoryname;
        const data = getData(categoryname);   
        
        const sortedData = data.sort((a, b) =>
            {const companyA = a.company || '';
            const companyB = b.company || '';
            return companyA.localeCompare(companyB);}
        );
        res.status(200).json({ data: sortedData });

    } catch (error) {
        console.log(error)
        res.status(400).json({"msg": "something went wrong"})
    }
})

app.get("/categories/:categoryname/products/discount", (req, res) => {
    try {
        const categoryname = req.params.categoryname;
        const data = getData(categoryname);   
        
        const sortedData = data.sort((a, b) => b.discount - a.discount);
        res.status(200).json({ data: sortedData });

    } catch (error) {
        console.log(error)
        res.status(400).json({"msg": "something went wrong"})
    }
})


app.get("/categories/:categoryname/products/:n", (req, res) => {
    try {
        const categoryname = req.params.categoryname;
        const n = req.params.n;
        const resp = getData(categoryname);        
        const data = resp.sort((a, b) => b.rating - a.rating);

        if(n > 10){
            const page = parseInt(req.query.page, 10) || 1;
            const start = (page - 1) * 10;
            const end = start + 10;
            const paginatedData = data.slice(start, end);

            res.status(200).json({
                page:page,
                data: paginatedData,
            });
        }else{
            res.status(200).json({"data": data.splice(0, n)});   
        }

    } catch (error) {
        console.log(error)
        res.status(400).json({"msg": "something went wrong"})
    }
})


app.get("/categories/:categoryname/products/product/:id", (req, res) => {
    try {
        const categoryname = req.params.categoryname;
        const resp = getData(categoryname);
        const id = req.params.id;

        const product = resp.find(prod => prod.id == id)
        res.status(200).json({product});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "something went wrong" });
    }
});



app.listen(PORT, () => {
    console.log("server started")
})