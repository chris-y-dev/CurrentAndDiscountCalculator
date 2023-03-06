// import { API_KEY } from "@env";
import ProvideKey from "./hooks/ProvideKey";
import CryptoJS from "crypto-js";
import KeyService from "../service/KeyService";

export default async function GetCurrencyConversion(
  targetCurrency: string,
  baseCurrency: string,
  amountInput: number
): Promise<any> {
  var keys = await KeyService();

  var decrypted = CryptoJS.TripleDES.decrypt(keys?.key, keys?.phrase);

  // const apiKey = API_KEY;

  var myHeaders = new Headers();
  myHeaders.append("apikey", decrypted.toString(CryptoJS.enc.Utf8));

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const result = await fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${amountInput}`,
    requestOptions
  );

  return await result.json();
}
