import { useEffect, useRef, useState } from 'react'

type Option = {
    label: string
    value?: string
    img?: string
}

interface SelectProps {
    options: Option[]
    value?: string
    onChange?: (v: string) => void
    className?: string
    ariaLabel?: string
}

export default function Select({ options, value, onChange, className = '', ariaLabel }: SelectProps) {
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    // find the selected option object
    const selected = options.find((o) => (o.value ?? o.label) === value) || options[0]

    useEffect(() => {
        function onDoc(e: MouseEvent) {
            if (!ref.current) return
            if (!ref.current.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener('mousedown', onDoc)
        return () => document.removeEventListener('mousedown', onDoc)
    }, [])

    function handleSelect(opt: Option) {
        setOpen(false)
        onChange && onChange(opt.value ?? opt.label)
    }

    return (
        <div className={`relative ${className}`} ref={ref}>
            <button
                type="button"
                aria-label={ariaLabel}
                onClick={() => setOpen((s) => !s)}
                className="w-full bg-neutral-900 border border-neutral-700 rounded-2xl px-4 py-4 text-slate-100 flex items-center gap-3 justify-between focus:outline-none"
            >
                <div className="flex items-center gap-3 truncate">
                    {selected?.img ? (
                        // if img value looks like a bootstrap icon class (starts with "bi-"), render it as an <i>
                        selected.img.startsWith('bi-') ? (
                            <i className={`bi ${selected.img} w-8 h-8 rounded-full bg-neutral-800 text-lg flex items-center justify-center text-slate-200`} />
                        ) : (
                            <img src={selected.img} alt="asset" className="w-8 h-8 rounded-full object-cover" />
                        )
                    ) : (
                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm text-slate-400">{(selected?.label || '').charAt(0)}</div>
                    )}
                    <span className="truncate text-slate-100">{selected?.label}</span>
                </div>

                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div className="absolute right-0 left-0 mt-2 bg-neutral-900 border border-neutral-700 rounded-lg shadow-lg z-20 overflow-hidden">
                    <ul className="max-h-56 overflow-auto">
                        {options.map((opt) => (
                            <li
                                key={opt.label}
                                onClick={() => handleSelect(opt)}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-neutral-800 cursor-pointer"
                            >
                                {opt.img ? (
                                    opt.img.startsWith('bi-') ? (
                                        <i className={`bi ${opt.img} w-8 h-8 rounded-full bg-neutral-800 text-lg flex items-center justify-center text-slate-200`} />
                                    ) : (
                                        <img src={opt.img} alt="asset" className="w-8 h-8 rounded-full object-cover" />
                                    )
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm text-slate-400">{opt.label.charAt(0)}</div>
                                )}
                                <span className="text-slate-100">{opt.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
