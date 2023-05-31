import webCrypto from "./core";
import { DEFAULT_CRYPTOGRAPHY } from "./constants";

export type algorithmType =
  | AlgorithmIdentifier
  | RsaOaepParams
  | AesCtrParams
  | AesCbcParams
  | AesGcmParams;

export type cryptographyType = {
  algorithm?: algorithmType;
  key: CryptoKey;
  data: BufferSource;
};

export async function decrypt(params: cryptographyType): Promise<ArrayBuffer> {
  const alg = params.algorithm ?? DEFAULT_CRYPTOGRAPHY;
  const arrayBuffer = await webCrypto.decrypt(alg, params.key, params.data);
  return arrayBuffer;
}

export async function encrypt(params: cryptographyType): Promise<ArrayBuffer> {
  const alg = params.algorithm ?? DEFAULT_CRYPTOGRAPHY;
  const arrayBuffer = await webCrypto.encrypt(alg, params.key, params.data);
  return arrayBuffer;
}
