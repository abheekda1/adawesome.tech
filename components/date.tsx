export default function asdf({ timestamp } : { timestamp: string | number | Date }) {
    return <>{new Date(timestamp).toLocaleString().split(',')[0]}</>;
}