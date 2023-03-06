import CryptoJS from "crypto-js";

export default async function ProvideKey(): Promise<any> {
  var hash = CryptoJS.TripleDES.encrypt(
    "iCA40GESZPBgodW04FT7wDv4O1lylcCp",
    "CcNQWAmvCd"
  );

  return hash;
}
