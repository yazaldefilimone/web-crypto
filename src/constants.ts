import { algorithmType } from "./cryptography";
import { formantType } from "./key";
import webCrypto from "./core";

export const DEFAULT_KEY_FORMAT = "pkcs8" as formantType;
export const DEFAULT_KEY_GENERATE_ALGORITHM = {
  name: "AES-CBC",
  length: 256,
} as AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params;

export const DEFAULT_CRYPTOGRAPHY: algorithmType = {
  name: "AES-CBC",
  iv: webCrypto.getRandomValues(new Uint8Array(16)),
};
