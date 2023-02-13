const db = require("../config/db");

exports.listAllProducts = async(req,res) => {
    // main query to get all products with category name and subcategory name (if exists)
    var query = 'SELECT product.name,product.price FROM product \
                left join category on product.category_id = category.id \
                left join  subcategory on subcategory.id = product.subcategory_id ';

    // array to keep track of query variables to be replaced
    var array = []
    
    // index to keep track of query variables ex: $1
    var index = 1

    //Get products with category and without subcategory
    if(req.query.category && !req.query.subcategory){
        query += `WHERE category.name = $${index} `;
        array.push(req.query.category);
        index +=1;
    }

    //Get products with subcategory and without category
    else if(req.query.subcategory && !req.query.category){
        query += `WHERE subcategory.name = $${index} `;
        array.push(req.query.subcategory);
        index +=1;
    }

    //Get products with category and subcategory
    else{
        query += `WHERE category.name = $${index} AND subcategory.name = $${index+1} `;
        array.push(req.query.category,req.query.subcategory);
        index +=2;
    }

    //Order products with orderBy and sortBy
    if(req.query.sortBy && req.query.orderBy){
        query += `ORDER BY product.${req.query.sortBy} ${req.query.orderBy.toUpperCase()} `;
    }
    
    //Get products with limit and the offset will be (page number-1)*limit
    // Ex: limit = 10, page = 1  --> offset will be 0 which means get the first 10 products
    if(req.query.limit && req.query.page){
        query += `LIMIT $${index} OFFSET $${index+1} `;
        array.push(parseInt(req.query.limit),(parseInt(req.query.page)-1)*parseInt(req.query.limit));
    }
    try {
        const response = await db.query(query,array);
        res.send(response.rows);
    } catch (error) {
        res.status(500).send();
    }

};

