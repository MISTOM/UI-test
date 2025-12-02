interface InputProps {
    value?: string
    onChange?: (v: string) => void
    placeholder?: string
    readOnly?: boolean
    type?: string
    className?: string
    ariaLabel?: string
}

export default function Input({ value, onChange, placeholder, readOnly, type = 'text', className = '', ariaLabel }: InputProps) {
    return (
        <input
            aria-label={ariaLabel}
            value={value}
            readOnly={readOnly}
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange && onChange(e.target.value)}
            className={`w-full bg-neutral-900 border border-neutral-700 rounded-3xl px-5 py-3 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-accent-blue/20 transition-colors ${className}`}
        />
    )
}
