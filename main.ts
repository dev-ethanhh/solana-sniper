// Libraries
import { AccountLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";

// Target wallet public key
const publicKey = process.argv[2] || "";
if (publicKey === "") {
    console.log('Please provide a public key argument');
    process.exit(1);
}

const startTime: Date = new Date();

// Insert your custom RPC endpoint below.
// If you don't have one, you can use a public RPC from:
// https://docs.solana.com/cluster/rpc-endpoints
const connection = new Connection("https://api.mainnet-beta.solana.com");

const tokenAccounts = await connection.getTokenAccountsByOwner(
    new PublicKey(publicKey), {
        programId: TOKEN_PROGRAM_ID,
    }
);

console.log("\nTOKEN :                                          BALANCE :");
tokenAccounts.value.forEach((tokenAccount) => {
    const accountData = AccountLayout.decode(tokenAccount.account.data);
    console.log(`${new PublicKey(accountData.mint)}     ${accountData.amount}`);
});

const endTime: Date = new Date();
const timeElapsed: number = endTime.getTime() - startTime.getTime();
console.log(`\nTIME ELAPSED : ${(timeElapsed / 1000)} seconds\n`);
