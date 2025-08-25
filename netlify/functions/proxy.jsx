import fetch from "node-fetch";

export async function handler(event) {
  const { service_id, page } = event.queryStringParameters;

  try {
    const response = await fetch(
      `http://64.227.189.27/wallet/api/v1/transaction_history?service_id=${service_id}&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`, // put token in Netlify env var
        },
      }
    );

    const data = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
