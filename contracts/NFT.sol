// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract CoffeeWars is ERC721, ERC721Enumerable, ERC721URIStorage {
    using SafeMath for uint256;
    uint public drop_unlock_time = 1667260800;
    struct owner {
        address addr;
        uint percent;
    }
    address[15] public wallets = [
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 59), 
        owner(0x653229a1c558b87cba440bb82d296Bd1E572C23D, 10), 
        owner(0xfe78bf9d611c6aAB734A69810E79e8220278c897, 10), 
        owner(0xFFE7aFE2b1Fa96045e91e566a903a230CbB99f70, 5), 
        owner(0x1B86c2909C765eC3Be7Ad953E3Bd6f3c748EE07B, 2), //Wallet E 2% Nirupam Nigham
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2),
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2),
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2),
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2),
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2),
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2), 
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2), 
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2), 
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2), 
        owner(0xf74a589d778f6D1166DcA66d0B17263403227E55, 2)
    ];

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        if(block.timestamp < 1667260800) {      //November 1st 2022
            return "https://cbgb.mypinata.cloud/ipfs/QmXVss1BheMNtWhvBQqV613uu9nh67fcFh9eMFF9avadfx";
        }else {
            return super.tokenURI(tokenId);
        }
    }
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    constructor() ERC721("CoffeeWars", "CW") {}
    
    function mint(string memory _uri) public payable {
        uint256 mintIndex = totalSupply();
        _safeMint(msg.sender, mintIndex);
        _setTokenURI(mintIndex, _uri);
        _sendEther();
    }

    function doubleMint(string[] memory metadataGroup) public payable {
        for (uint256 i = 0; i < metadataGroup.length; i++) {
            uint256 mintIndex = totalSupply();
            _safeMint(msg.sender, mintIndex);
            _setTokenURI(mintIndex, metadataGroup[i]);
        }
        _sendEther();
    }

    function _sendEther() public payable {
        (bool sentA,) = A.addr.call{value: msg.value * A.percent/100}("");
        (bool sentB,) = B.addr.call{value: msg.value * B.percent/100}("");
        (bool sentC,) = C.addr.call{value: msg.value * C.percent/100}("");
        (bool sentD,) = D.addr.call{value: msg.value * D.percent/100}("");
        (bool sentE,) = E.addr.call{value: msg.value * E.percent/100}("");
        (bool sentF,) = F.addr.call{value: msg.value * F.percent/100}("");
        (bool sentG,) = G.addr.call{value: msg.value * G.percent/100}("");
        (bool sentH,) = H.addr.call{value: msg.value * H.percent/100}("");
        (bool sentI,) = I.addr.call{value: msg.value * I.percent/100}("");
        (bool sentJ,) = J.addr.call{value: msg.value * J.percent/100}("");
        (bool sentK,) = K.addr.call{value: msg.value * K.percent/100}("");
        (bool sentL,) = L.addr.call{value: msg.value * L.percent/100}("");
        (bool sentM,) = M.addr.call{value: msg.value * M.percent/100}("");
        (bool sentN,) = N.addr.call{value: msg.value * N.percent/100}("");
        (bool sentO,) = O.addr.call{value: msg.value * O.percent/100}("");
    }

    function getTime() public view returns (uint256) {
        return block.timestamp;
    }
}