import { encrypt, decrypt } from "./cryptography";
import { createHash } from "./hash";
import { hexToBuffer, bufferToHex } from "./hex-buffer";
import { generateKey } from "./key";
import { textEncode, textDecode } from "./text-code";

const crypto = {
  encrypt,
  createHash,
  hexToBuffer,
  bufferToHex,
  generateKey,
  textDecode,
  textEncode,
  decrypt,
};

export default crypto;
