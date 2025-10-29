import { KiteConnect } from "kiteconnect";

const apiKey = "e8uabbs7zsoskn02";
const apiSecret = "q6rt5x2hlziac9c23jexste39ky2budq";
// const requestToken = "ncQ97glalwK6BSyntyau9dICEt5BTbX3"; // this request token expires, one-time-use-Only
// access token is long term, so we need to cache it
let access_token = "BRGRbx6bCdC143JKQjU270Y3Z1tH4r6P";

const kc = new KiteConnect({ api_key: apiKey });
kc.setAccessToken(access_token); // hard coded access token
console.log(kc.getLoginURL());

export async function placeOrder(tradingsymbol: string, quantity: number, type: "BUY"|"SELL") {
  try {

    // await generateSession();
    // await getProfile();
    
    await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol,
      transaction_type: type,
      quantity,
      product: "CNC",
      order_type: "MARKET"
    });

  } catch ( err) {
    console.error(err);
  }
}

export async function getPositions() {
  try {
    kc.setAccessToken(access_token);
    const holdings = await kc.getPositions();
    let allHoldings = "";
    holdings.net.map(holding => {
      allHoldings += `stock: ${holding.tradingsymbol}, qty: ${holding.quantity}, currentPrice: ${holding.last_price}`
    })

    return allHoldings;

  } catch ( err) {
    console.error(err);
  }
}

// async function generateSession() {
//   try {
//     const response = await kc.generateSession(requestToken, apiSecret);
//     console.log(response.access_token);
//     kc.setAccessToken(response.access_token);
//     console.log("Session generated:", response);
//   } catch (err) {
//     console.error("Error generating session:", err);
//   }
// }

// async function getProfile() {
//   try {
//     const profile = await kc.getProfile();
//     // const profile = await kc.placeOrder("regular", {
//     //   exchange: "NSE",
//     //   tradingsymbol: "HDFCBANK",
//     //   transaction_type: "BUY",
//     //   quantity: 1,
//     //   product: "CNC",
//     //   order_type: "MARKET"
//     // });
//     console.log("Profile:", profile);
//   } catch (err) {
//     console.error("Error getting profile:", err);
//   }
// }

// Initialize the API calls
// init();