interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({error}: ErrorMessageProps) {
    return (
        <p className='text-center'>
                <span className='text-red-600'>{error}</span>
            </p>
    )
}