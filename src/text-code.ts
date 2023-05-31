export function textEncode(input: string) {
  const encoder = new TextEncoder();
  return encoder.encode(input);
}

export function textDecode(input?: BufferSource, options?: TextDecodeOptions) {
  const decoder = new TextDecoder();
  return decoder.decode(input, options);
}
