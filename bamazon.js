// Create variables for the npm install requires we will need
var mySql = require("mySql");
var inquirer = require("inquirer");

// Create a connection to mySql
var connection = mySql.createConnection({
    host: "localhost",
    port: 3030,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazondb"
});

var Order = {};

// Check the connection with a simple throw error to congratulatory console.log
function makeConnection() {
    connection.connect(function(err, res) {
        if (err) throw err;
        showProducts();
    });
}

function reOrder(){
    order();
}

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

function selection() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'item_id',
            message: 'Please Select which item you would like to purchase: ',
            validate: function(value) {
                if(isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            type: 'input',
            name: 'stock_quantity',
            message: 'How much of this product would you like?: ',
            validate: function(value){
                if(isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function(order) {
        //console.log(order);
        Order = order;
        var query = connection.query('SELECT * FROM products WHERE ?',
    [
        {
            item_id: order.item_id
        }
    ],
    function(err, res){
            if(err) throw err;
            var stockQuantity = res[0].stock_quantity;
            var orderQuantity = Order.stock_quantity;
            //console.log(res[0].stock_quantity);
            //console.log(Order);
            if(parseInt(orderQuantity) <= parseInt(stockQuantity)) {
                console.log("Congrats!! We have plenty of this item");
                console.log("Here are your " + order.stock_quantity + " " + res[0].product_name);
                connection.query('UPDATE products SET ? WHERE ?', 
            [
                {
                    stock_quantity: stockQuantity - orderQuantity
                },
                {
                    item_id: order.item_id
                }
            ],
            function(err, res) {
                    if(err) throw err;
                    connection.end();
                    
                });
            } else {
                console.log("I'm sorry there are insufficient funds to fulfill your order");
                connection.end();
            }
        });
    });
}

makeConnection();