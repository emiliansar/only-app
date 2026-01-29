export default function Error({ error }) {
    return (
        <div>Ошибка: {error.response?.data?.message || error.message}</div>
    )
}