// Create variables for the npm install requires we will need
var mySql = require("mySql");
var inquirer = require("inquirer");

// Create a connection to mySql
var connection = mySql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazondb"
});

// Check the connection with a simple throw error to congratulatory console.log
connection.connect(function(err, res) {
    if (err) throw err;
    showProducts();
});

function showProducts () {
    connection.query('SELECT * FROM products', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log( "** " +
                "Product_Id: " +
                res[i].item_id + '\n' + "** " +
                "Product_name: " +
                res[i].product_name + '\n' + "** " +
                "Price: " +
                res[i].price + '\n' + "** " +
                "Quantity: " +
                res[i].stock_quantity + '\n'
            );
        if (err) throw err;
        }
        selection();
    })
}

function selection () {
    inquirer
        .prompt([
            {
                name: "pick1",
                type: "input",
                message: "What is the product ID of the Item you would like to purchase?"
            }
        ])
        .then(function (answer) {
            if (answer.pick1 !== null) {
                inquierer.prompt([
                    {
                        name: "pick2",
                        message: "How much of this product would you like?",
                        type: "input"
                    }
                ])
                    .then(function (answer) {
                        if (answer.pick2 < answer.stock_quantity) {
                            console.log("Coming right up!");
                        }
                        else {
                            console.log("Insufficient Quantity");
                        }
                    });
                connection.end();
            }
        })
}





