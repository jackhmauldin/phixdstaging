import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

let telnum = "Tel- (770) 876-7935";

export default function Contact() {
  return (
    <>
      <div className="translate-y-72 xl:translate-y-60 xl:flex hidden">
        <a href="mailto:jackmauldin@phixd.net">
          <Typography variant="lead" className="!text-gray-500 mt-8">
            E-Mail- jackmauldin@phixd.net
          </Typography>
        </a>
        <a href="tel:+17708767935">
          <Typography variant="lead" className="!text-gray-500 mt-8 ml-5">
            {telnum}
          </Typography>
        </a>
      </div>
      <div className="translate-y-60 xl:hidden flex">
        <a href="mailto:jackmauldin@phixd.net">
          <EnvelopeIcon
            strokeWidth={2}
            className="h-10 w-10 mr-10 text-gray-500"
          />
        </a>
        <a href="tel:+17708767935">
          <PhoneIcon strokeWidth={2} className="h-10 w-10 text-gray-500" />
        </a>
      </div>
    </>
  );
}
