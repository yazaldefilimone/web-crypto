import webCrypto from "./core";
import { textEncode } from "./text-code";
import { bufferToHex } from "./hex-buffer";
export type hashAlgoType = "SHA-256";

export async function createHash(
  input: string,
  algorithm: hashAlgoType = "SHA-256"
): Promise<string> {
  const inputWithoutSpaces = input.trim();
  if (inputWithoutSpaces.length == 0) {
    return inputWithoutSpaces;
  }
  const coded = textEncode(inputWithoutSpaces);
  const hashBuffer = await webCrypto.digest(algorithm, coded);
  const hashString = bufferToHex(hashBuffer);
  return hashString;
}
