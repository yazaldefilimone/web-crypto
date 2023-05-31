import webCrypto from "./core";
import { DEFAULT_KEY_GENERATE_ALGORITHM } from "./constants";
export type formantType = "pkcs8" | "raw" | "spki";
export async function generateKey(format?: formantType): Promise<CryptoKey> {
  const formate = format ?? DEFAULT_KEY_GENERATE_ALGORITHM;
  const key = await webCrypto.generateKey(formate, true, [
    "encrypt",
    "decrypt",
  ]);
  return key as CryptoKey;
}
