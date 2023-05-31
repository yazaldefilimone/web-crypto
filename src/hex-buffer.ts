export function bufferToHex(buffer: ArrayBuffer): string {
  if (!isValidArrayBuffer(buffer)) {
    throw new Error("invalid buffer");
  }
  const byteArray = new Uint8Array(buffer);
  const hexArray = Array.from(byteArray).map((buffer) => buffer.toString(16).padStart(2, "0"));
  return hexArray.join("");
}

export function hexToBuffer(hexString: string): Uint8Array {
  if (!isValidHex(hexString)) {
    throw new Error(`invalid hax`);
  }
  const hexArray = hexString.match(/.{1,2}/g);
  const byteArray = new Uint8Array(hexArray.map((byte) => parseInt(byte, 16)));
  return byteArray;
}
