export default function DynamicDate({ timestamp } : { timestamp: string | number | Date }) {
    return <>{new Date(timestamp).toLocaleString().split(',')[0]}</>;
}