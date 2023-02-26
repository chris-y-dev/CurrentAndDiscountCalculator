export default async function GetCurrencyConversion(
  targetCurrency: string,
  baseCurrency: string,
  amountInput: number
): Promise<any> {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "iCA40GESZPBgodW04FT7wDv4O1lylcCp");

  console.log(baseCurrency);
  console.log(targetCurrency);

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
