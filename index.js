/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nft_collection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, owner, date) {
    const NFT = {
       "name": name,
       "owner": owner,
       "minted on": date
    }
    nft_collection.push(NFT);
}


// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("List of the minted NFT's:")
    let i;
    let j = nft_collection.length;
    for (i = 0; i < j; i++) {
        console.log(nft_collection[i])
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total minted nft = " + nft_collection.length)
}

mintNFT("Yogesh's", "Yogesh Rajput", "02/06/2024");
mintNFT("RCB's", "AB De Villier's", "02/06/2024");
mintNFT("Mumbai Indians", "Hardik Pandya", "02/06/24");


// call your functions below this line
listNFTs();
getTotalSupply();
