import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/booking-application-development' },
    title: 'Booking Application Development | BizoraEdge',
    description: 'Custom booking and scheduling applications for modern businesses.',
};

export default function BookingApplicationDevelopmentPage() {
    return (
        <ServiceTemplate 
            slug="booking-application-development"
            title="Custom Booking & Scheduling Applications"
            subtitle="Booking Application Development"
            description="We build custom booking and scheduling applications tailored for service businesses, healthcare, events, and hospitality with secure payment integrations."
            benefits={[
                "Real-time availability",
                "Calendar synchronization",
                "Payment gateway integration",
                "Automated reminders",
                "User management"
            ]}
        />
    );
}
