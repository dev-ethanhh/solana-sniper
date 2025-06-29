### Quick explanation
<hr>
Solana Sniper is a TypeScript on-chain program for Solana that scans a wallet and lists each of its tokens along with their quantities. It can be useful in many scenarios. Currently, it only prints the results, but you can integrate it with other programs to use this information for on-chain operations.

### Setting up the program
<hr>
To install this program, you just need <a href="https://nodejs.org/en/download">Node.js</a>.
Once the repository is installed, extract it.
The only customization you need to make is changing the RPC (line 16) to a faster, private one. However, you can still use the mainnet RPC provided by default.

If you don’t have a code editor, I strongly recommend <a href="https://vscodium.com/">VSCodium</a>, which is like VS Code but without Microsoft’s data collection.

Open your terminal, navigate to the repository folder, and run:
```sh
npm install
```
After the installation completes, run the program with:
```sh
npm start -- <public_key>
```
*Replace <public_key> with the actual wallet address, do not type the angle brackets.*

The program should work out of the box, but since it was created a couple of years ago, some updates might be needed.
If you run into issues, feel free to fix them, it shouldn’t be too complicated. Otherwise, you can contact me by email (check my profile).
