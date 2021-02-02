import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

export const ShareButton = ({ text, url }) => {
  return (
    <ul className="flex justify-center list-none pt-3 pb-1">
      <li className="mr-8">
        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </li>
      <li className="">
        <FacebookShareButton url={url} title={text}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </li>
    </ul>
  );
};
