export async function handler(event) {
  try {
    console.log("Query params:", event.queryStringParameters);
    const { queryStringParameters } = event;
    const page = queryStringParameters.page || 0;
    const service_id = (event.queryStringParameters && event.queryStringParameters.service_id) || 111;


    const response = await fetch(
      `https://middleware-services.npggames.com/wallet/api/v1/transaction_history?service_id=${service_id}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
      }
    );

    console.log("Fetch response status:", response.status);

    const data = await response.json();
    console.log("Fetched data:", data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
