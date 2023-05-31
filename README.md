web-crypto is a lightweight and dependency-free JavaScript library for cryptographic operations in web browsers. It provides a comprehensive set of functions and algorithms to securely handle cryptographic tasks, ensuring data confidentiality, integrity, and authentication.

## Features

- Zero external dependencies: web-crypto is designed to be a standalone library, without any reliance on external frameworks or libraries. This ensures easy integration and reduces the risk of compatibility issues.

- Cross-browser compatibility: web-crypto is built to work seamlessly across all major web browsers, including Chrome, Firefox, Safari, and Edge. It leverages the Web Crypto API, which is supported by modern browsers, to perform cryptographic operations.

- Comprehensive cryptographic functions: The library supports a wide range of cryptographic functions, including encryption, decryption, hashing, digital signatures, key generation, and key management. This allows developers to implement robust security measures in their web applications.

- Easy-to-use API: web-crypto provides a simple and intuitive API, making it accessible to both experienced and novice developers. It offers clear and concise methods for performing common cryptographic operations, allowing developers to focus on their application logic.

## Installation

You can install web-crypto using package managers like npm or yarn:

```shell
npm install web-crypto.js
```

## Getting Started

To get started with web-crypto, simply include the library in your project and start using its cryptographic functions. Refer to the documentation and code examples provided to understand the available methods and their usage.

```tsx
import { useEffect } from "react";
import webCrypto from "web-crypto.js";

function App() {
  useEffect(() => {
    async function anyFn() {
      const key = await webCrypto.generateKey();
      const data = {
        name: "Yazalde Filimone",
        age: 18,
      };
      const coded = webCrypto.textEncode(JSON.stringify(data));
      const data_encrypt = await webCrypto.encrypt({ key, data: coded });
      const data_decrypt = await webCrypto.decrypt({ key, data: data_encrypt });
      const decode = JSON.parse(webCrypto.textDecode(data_decrypt));
      console.log({ decode });
    }
    anyFn()
      .then()
      .catch((erro) => console.log(erro));
  }, []);
  return <div />;
}

export default App;
```

## Contribution

web-crypto welcomes contributions from the open-source community. If you encounter any issues or have suggestions for improvements, please submit a GitHub issue or pull request. Together, we can make web-crypto even better.

## License

web-crypto is released under the MIT License. See the `LICENSE` file for more information.

## Acknowledgments

web-crypto is built upon the foundation of the Web Crypto API specification, which is developed and maintained by the World Wide Web Consortium (W3C). We would like to express our gratitude to the W3C and the contributors who have made this library possible.
