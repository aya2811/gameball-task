const db = require("../config/db");

exports.listAllSubCategories = async(req,res) => {
   
    var query = 'SELECT subcategory.name FROM subcategory \
    left join category on subcategory.category_id = category.id '
    var array = []
    var index = 1

    if(req.query.category){
        query += `WHERE category.name = $${index} `;
        array.push(req.query.category);
        index +=1;
    }
    try {
        const response = await db.query(query,array);
        res.send(response.rows);
    } catch (error) {
        res.status(500).send();
    }

};

