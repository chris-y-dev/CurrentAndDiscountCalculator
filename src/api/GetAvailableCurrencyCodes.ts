import { API_KEY } from "@env";
import ProvideKey from "./hooks/ProvideKey";

export default async function GetAvailableCurrencyCodes(): Promise<any> {
  const apiKey = API_KEY;

  var hash = await ProvideKey();
  console.log(hash);

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
