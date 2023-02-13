const db = require("../config/db");

exports.listAllCategories = async(req,res) => {
   // Get all catgories in the system
    try {
        const response = await db.query('SELECT name,imageactiveurl,imageinactiveurl FROM category',[]);
        res.send(response.rows);
    } catch (error) {
        res.status(500).send();
    }

};

