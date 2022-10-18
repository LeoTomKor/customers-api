var config = require("./dbconfig");
const sql = require("mssql");

async function getCustomers() {
    try 
    {
      let pool = await sql.connect(config);
      let products = await pool.request().query("Select * from [dbo].[TLA MFG GO LIVE$Customer]");
      return products.recordset;
    } 
    catch (error) 
    {
      console.log(error);
    }
  }

  async function getcustomer(customerId) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.Char, customerId)
            .query("Select * from [dbo].[TLA MFG GO LIVE$Customer] where [No_] = @input_parameter");
        return product.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}

  module.exports = {
    getCustomers : getCustomers,
    getcustomer: getcustomer
  }