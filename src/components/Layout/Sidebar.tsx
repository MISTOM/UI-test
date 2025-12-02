// Sidebar component
import { useState } from 'react'

const sidebarItems = [
    { icon: 'bi-house', label: 'Dashboard' },
    { icon: 'bi-arrow-left-right', label: 'XCHANGE' },
    { icon: 'bi-currency-exchange', label: 'MoneyX' },
    { icon: 'bi-people', label: 'P2P Trading' },
    { icon: 'bi-repeat', label: 'Swap Crypto' },
    { icon: 'bi-person-circle', label: 'Account' },
    { icon: 'bi-gear', label: 'Settings' },
]

export function Sidebar() {
    const [accountOpen, setAccountOpen] = useState(false)

    return (
        <aside className="w-64 hidden md:block pt-8 bg-transparent">
            <ul className="space-y-2">
                {sidebarItems.map((it) => {
                    const active = it.label === 'MoneyX'

                    // Render Account as a dropdown
                    if (it.label === 'Account') {
                        return (
                            <li key={it.label}>
                                <div
                                    className={`flex items-center justify-between gap-3 pl-10 pr-4 py-3 rounded-r-md text-sm ${active ? ' bg-neutral-400/30 text-amber-50 font-semibold' : 'text-muted hover:bg-neutral-800'}`}
                                    onClick={() => setAccountOpen((s) => !s)}
                                >
                                    <div className="flex items-center gap-3">
                                        <i className={`bi ${it.icon} text-lg`} aria-hidden />
                                        <span>Account</span>
                                    </div>

                                    <button
                                        type="button"
                                        aria-expanded={accountOpen}
                                        onClick={() => setAccountOpen((s) => !s)}
                                        className="text-sm text-muted/80 hover:text-muted"
                                    >
                                        <i className={`bi ${accountOpen ? 'bi-chevron-up' : 'bi-chevron-down'} text-sm`} aria-hidden />
                                    </button>
                                </div>

                                {accountOpen && (
                                    <ul className="mt-1 space-y-1">
                                        <li>
                                            <a href="#" className="flex items-center gap-2 pl-16 pr-4 py-2 text-sm text-muted hover:bg-neutral-800 rounded">
                                                <span className="text-[13px]">Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center gap-2 pl-16 pr-4 py-2 text-sm text-muted hover:bg-neutral-800 rounded">
                                                <span className="text-[13px]">Sign Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        )
                    }

                    return (
                        <li key={it.label}>
                            <a
                                href="#"
                                className={`flex items-center gap-3 pl-10 py-3 rounded-r-md text-sm ${active ? ' bg-neutral-400/30 text-amber-50 font-semibold' : 'text-muted hover:bg-neutral-800'}`}
                            >
                                <i className={`bi ${it.icon} text-lg`} aria-hidden />
                                <span>{it.label}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
