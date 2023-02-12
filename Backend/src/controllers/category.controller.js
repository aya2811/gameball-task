const db = require("../config/db");

exports.listAllCategories = async(req,res) => {
   
    try {
        const response = await db.query('SELECT name,imageactiveurl,imageinactiveurl FROM category',[]);
        res.send(response.rows);
    } catch (error) {
        res.status(500).send();
    }

};

