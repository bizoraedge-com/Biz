import { Metadata } from 'next';
import ServiceTemplate from '@/components/sections/ServiceTemplate';

export const metadata: Metadata = {
    alternates: { canonical: '/iot-solutions' },
    title: 'IoT Development Company | IoT Solutions | BizoraEdge',
    description: 'IoT can connect devices, systems and people—but collecting data is only the beginning. BizoraEdge develops IoT applications that help organizations monitor, manage and use connected information more effectively.',
};

export default function IoTSolutionsPage() {
    return (
        <ServiceTemplate 
            title="Turn Connected Data Into Useful Business Information"
            subtitle="IoT Solutions"
            description="IoT can connect devices, systems and people—but collecting data is only the beginning. BizoraEdge develops IoT applications that help organizations monitor, manage and use connected information more effectively."
            benefits={[
                "IoT cloud infrastructure setup",
                "Real-time monitoring dashboards",
                "Sensor data processing and analytics",
                "Remote device management platforms",
                "Edge computing software",
                "IoT security and firmware updates",
                "Mobile apps for hardware control"
            ]}
            faq={[
                { q: 'What types of IoT projects do you work on?', a: 'We build the software side of IoT projects. This includes cloud infrastructure, data pipelines, administrative dashboards, and user-facing mobile apps that communicate with your hardware.' },
                { q: 'Do you manufacture the hardware?', a: 'No, we are a software development company. We work alongside your hardware engineers or third-party device manufacturers to build the software that controls and monitors the devices.' },
                { q: 'How do you handle IoT data at scale?', a: 'We utilize scalable cloud services (like AWS IoT Core or Azure IoT) and time-series databases designed to handle millions of data points per second.' },
                { q: 'What communication protocols do you support?', a: 'We work with standard IoT protocols including MQTT, CoAP, HTTP/S, WebSockets, Bluetooth Low Energy (BLE), and Zigbee.' },
                { q: 'Can you update device firmware remotely?', a: 'Yes. We can build secure Over-The-Air (OTA) update systems that allow you to patch and upgrade devices in the field.' }
            ]}
            slug="IoT Solutions"
        />
    );
}
