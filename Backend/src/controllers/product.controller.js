const db = require("../config/db");

exports.listAllProducts = async(req,res) => {
    var query = 'SELECT product.name,product.price FROM product \
                left join category on product.category_id = category.id \
                left join  subcategory on subcategory.id = product.subcategory_id ';
    var array = []
    var index = 1

    if(req.query.category && !req.query.subcategory){
        query += `WHERE category.name = $${index} `;
        array.push(req.query.category);
        index +=1;
    }

    else if(req.query.subcategory && !req.query.category){
        query += `WHERE subcategory.name = $${index} `;
        array.push(req.query.subcategory);
        index +=1;
    }

    else{
        query += `WHERE category.name = $${index} AND subcategory.name = $${index+1} `;
        array.push(req.query.category,req.query.subcategory);
        index +=2;
    }

    if(req.query.sortBy && req.query.orderBy){
        query += `ORDER BY product.${req.query.sortBy} ${req.query.orderBy.toUpperCase()} `;
    }
    
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

