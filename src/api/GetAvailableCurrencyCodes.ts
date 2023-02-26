import { API_KEY } from "@env";

export default async function GetAvailableCurrencyCodes(): Promise<any> {
  const apiKey = API_KEY;

  var myHeaders = new Headers();
  myHeaders.append("apikey", apiKey);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const result = await fetch(
    `https://api.apilayer.com/exchangerates_data/symbols`,
    requestOptions
  );

  return await result.json();
}
