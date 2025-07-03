import { Key, useState } from 'react';
import Select from 'react-select';
import { OrderCard } from './orderCard';

const orderOptions = [
    { value: 'active', label: 'Active Orders' },
    { value: 'past', label: 'Past Orders' },
    { value: 'all', label: 'All Orders' },
];

const orders = [
    {
        status: "Preparing your shipment",
        title: "Neuva Extend",
        frequency: "Every 2 months",
        price: "₹1,999",
        imageSrc: "/product-image.jpg",
        nextDeliveryDate: "Jul 7, 2025",
        orderCreated: "Jan 7, 2025",
        trackingNumber: "12345",
        shippingAddress: "First Name Last Name, Flat, House no., Building, Company, Apartment",
    },
    {
        status: "Delivered",
        title: "Neuva Boost",
        frequency: "Every month",
        price: "₹999",
        imageSrc: "/product-image.jpg",
        nextDeliveryDate: "Jun 7, 2025",
        orderCreated: "Dec 7, 2024",
        trackingNumber: "67890",
        shippingAddress: "First Name Last Name, Flat, House no., Building, Company, Apartment",
    },
    {
        status: "Cancelled",
        title: "Neuva Balance",
        frequency: "Every 3 months",
        price: "₹2,499",
        imageSrc: "/product-image.jpg",
        nextDeliveryDate: "May 7, 2025",
        orderCreated: "Nov 7, 2024",
        trackingNumber: "54321",
        shippingAddress: "First Name Last Name, Flat, House no., Building, Company, Apartment",
    },
    {
        status: "Preparing your shipment",
        title: "Neuva Focus",
        frequency: "Every 6 months",
        price: "₹3,999",
        imageSrc: "/product-image.jpg",
        nextDeliveryDate: "Aug 7, 2025",
        orderCreated: "Feb 7, 2025",
        trackingNumber: "98765",
        shippingAddress: "First Name Last Name, Flat, House no., Building, Company, Apartment",
    },
    {
        status: "Delivered",
        title: "Neuva Calm",
        frequency: "Every month",
        price: "₹1,499",
        imageSrc: "/product-image.jpg",
        nextDeliveryDate: "Sep 7, 2025",
        orderCreated: "Mar 7, 2025",
        trackingNumber: "11223",
        shippingAddress: "First Name Last Name, Flat, House no., Building, Company, Apartment",
    },
];

function filterOrders(orders: any, filter: string) {
    if (filter === 'all') return orders;
    if (filter === 'active') {
        // Active: status is "Preparing your shipment"
        return orders.filter((order: { status: string; }) => order.status === "Preparing your shipment");
    }
    if (filter === 'past') {
        // Past: status is "Delivered" or "Cancelled"
        return orders.filter((order: { status: string; }) => order.status === "Delivered" || order.status === "Cancelled");
    }
    return orders;
}

export default function OrderHistory() {
    const [orderFilter, setOrderFilter] = useState('all');
    const filteredOrders = filterOrders(orders, orderFilter);

    return (
        <div className='flex flex-col'>
            <div className="flex flex-row justify-between">
                <h2 className="text-3xl font-bold mb-4">Your Orders</h2>
                <div className="relative">
                    <Select
                        className="min-w-[160px] rounded-lg text-sm"
                        classNamePrefix="react-select"
                        value={orderOptions.find(option => option.value === orderFilter)}
                        onChange={(option) => setOrderFilter(option?.value || 'all')}
                        options={orderOptions}
                        isSearchable={false}
                        menuIsOpen={undefined}
                        styles={{
                            control: (base, state) => ({
                                ...base,
                                borderRadius: 12,
                                borderColor: state.isFocused ? '#2F5F8D' : '#E5E7EB',
                                boxShadow: state.isFocused ? '0 0 0 2px #2F5F8D33' : 'none',
                                '&:hover': { borderColor: '#2F5F8D' },
                                minHeight: 40,
                            }),
                            option: (base, state) => ({
                                ...base,
                                borderRadius: 8,
                                backgroundColor: state.isSelected
                                    ? '#2F5F8D'
                                    : state.isFocused
                                        ? '#E6F0FA'
                                        : 'white',
                                color: state.isSelected ? 'white' : '#2F5F8D',
                                '&:active': {
                                    backgroundColor: '#2F5F8D',
                                    color: 'white',
                                },
                            }),
                            menu: (base) => ({
                                ...base,
                                borderRadius: 12,
                                overflow: 'hidden',
                            }),
                            singleValue: (base) => ({
                                ...base,
                                color: '#2F5F8D',
                                fontWeight: 500,
                            }),
                            dropdownIndicator: (base, state) => ({
                                ...base,
                                color: state.isFocused ? '#2F5F8D' : '#A0AEC0',
                                '&:hover': { color: '#2F5F8D' },
                            }),
                            indicatorSeparator: (base) => ({
                                ...base,
                                backgroundColor: '#2F5F8D22',
                            }),
                        }}
                        components={{
                            Input: () => null,
                        }}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                {filteredOrders.map((order: { status: string; title: string; frequency: string; price: string; imageSrc: string; nextDeliveryDate: string; orderCreated: string; trackingNumber: string; shippingAddress: string; }, index: Key | null | undefined) => (
                    <OrderCard
                        key={index}
                        status={order.status}
                        title={order.title}
                        frequency={order.frequency}
                        price={order.price}
                        imageSrc={order.imageSrc}
                        nextDeliveryDate={order.nextDeliveryDate}
                        orderCreated={order.orderCreated}
                        trackingNumber={order.trackingNumber}
                        shippingAddress={order.shippingAddress}
                    />
                ))}
            </div>
        </div>
    );
}