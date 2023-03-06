import CryptoJS from "crypto-js";

export default function GetDocRef() {
  const decrypt = CryptoJS.AES.decrypt(
    "U2FsdGVkX1/MWZCb0arh9/1z/VZUCtmeGoiOuP0MCNSpHrRuGEUIdFsEy2ilQ5sE",
    "abc"
  );

  return decrypt.toString(CryptoJS.enc.Utf8);
}
