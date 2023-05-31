function isValidHex(hexString: string) {
  const hexRegex = /^[0-9a-fA-F]+$/;
  return hexRegex.test(hexString);
}

function isValidArrayBuffer(buffer: unknown) {
  return buffer instanceof ArrayBuffer;
}
