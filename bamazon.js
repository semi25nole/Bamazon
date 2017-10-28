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
    selection();
});

function showProducts () {
    connection.query('SELECT * FROM products', function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log( '\n' + "** " +
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
    })
}

function selection () {
    inquirer
        .prompt([
            {
                name: "pick1",
                type: "input",
                message: "What is the product ID of the Item you would like to purchase?",
                validate: function (value) {
                    if (null === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "pick2",
                type: "input",
                message: "How much of this item would you like to purchase?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (res) {
            if (value > res.quantity_total) {
                console.log('Insufficient quantity!');
            } else {
                console.log('Coming right up! ');
            }
            connection.end();
        })
}





