import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/Link";
import useNfts from "hooks/useNfts";

const OnboardNFT = () => {
  return <Layout card={<NFTCard />} text={<NFTText />} />;
};

const NFTCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">What did I mint?</h2>
        <p className="text-gray-400 mt-2 mb-8"></p>
        <div className="mt-12 flex justify-between">
          <Link href="/onboard/nft">
            <Button variant="tertiary">← Back</Button>
          </Link>
          <Link href="/onboard/ethereum-1">
            <a>
              <Button>Next</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NFTText = () => {
  const nftCollection = useNfts("0x6bd8256a271e3053c0872fb716bdefab09df61b4");

  return (
    <div>
      <h2 className="text-sm font-bold mb-2">Your new frens</h2>
      <div className="flex flex-wrap gap-4">
        {nftCollection?.collection?.assets.slice(0, 10).map((asset: any) => {
          return (
            <div key={asset.id}>
              <img src={asset.image_url} alt={asset.id} className="w-20" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardNFT;