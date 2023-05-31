const fallback = window.crypto as any;
const WebCrypto = window.crypto.subtle || fallback.webkitSubtle;
if (!WebCrypto) {
  alert("Web Crypto is not supported on this browser");
  console.warn("Web Crypto API not supported");
  throw new Error("Web Crypto API not supported");
}

export default WebCrypto as Crypto;
