// ["MultiplicationLambda", "LambdaFunction"]    
exports.handler = async (event) => {
    let response;
    try {
        // Parse the input JSON
        const { multiplier, multiplicand } = JSON.parse(event.body);

        // Calculate the product
        const product = multiplier * multiplicand;

        // Create a successful response
        response = {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ product }),
        };
    } catch (error) {
        // Create an error response
        response = {
            statusCode: 400,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: "Invalid input" }),
        };
    }

    return response;
};
