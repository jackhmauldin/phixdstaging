import { Typography, IconButton } from "@material-tailwind/react";

const LINKS = ["Company", "About Us", "Team", "Product", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <Typography className="text-center font-normal !text-gray-700 pb-10">
      &copy; {CURRENT_YEAR} Made with{" "}
      <a href="https://www.material-tailwind.com" target="_blank">
        Material Tailwind
      </a>{" "}
      by{" "}
      <a href="https://www.phixd.net" target="_blank">
        Jack Mauldin
      </a>
      .
    </Typography>
  );
}

export default Footer;
