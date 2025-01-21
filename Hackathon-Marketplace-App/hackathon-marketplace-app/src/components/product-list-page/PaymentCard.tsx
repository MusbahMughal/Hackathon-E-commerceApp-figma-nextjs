import React from "react";
import Image from "next/image";

const PaymentCard = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div>
      <Image src={imgUrl} alt="company" width={100} height={50} />
    </div>
  );
};

export default PaymentCard;
