'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

type OrderCardProps = {
  status: string;
  title: string;
  frequency: string;
  price: string;
  imageSrc: string;
  nextDeliveryDate: string;
  orderCreated: string;
  trackingNumber: string;
  shippingAddress: string;
};

export function OrderCard({
  status,
  title,
  frequency,
  price,
  imageSrc,
  nextDeliveryDate,
  orderCreated,
  trackingNumber,
  shippingAddress,
}: OrderCardProps) {
  return (
    <div className="border rounded-xl p-4 md:p-6 bg-white shadow-sm space-y-4">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
          {status}
        </span>
        <Button variant="outline" size="sm">
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            Track Package
          </span>
        </Button>
      </div>

      <div className="flex items-start gap-4">
        <Image
          src={imageSrc}
          alt={title}
          width={64}
          height={64}
          className="rounded-md object-cover w-16 h-16"
        />
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-500">{frequency}</p>
          <p className="text-sm text-primary font-semibold mt-1">{price}</p>
        </div>
      </div>

      <div className="divide-y text-sm text-gray-800">
        <div className="flex justify-between py-2">
          <span>Next Delivery Date</span>
          <span>{nextDeliveryDate}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Order Created</span>
          <span>{orderCreated}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Tracking Number</span>
          <span>{trackingNumber}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Shipping Address</span>
          <span className="text-right">{shippingAddress}</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Total</span>
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
}
