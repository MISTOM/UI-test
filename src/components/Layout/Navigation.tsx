// Navigation component

const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Market', href: '/market' },
    { label: 'Rates', href: '/rates' },
    { label: 'Blog', href: '/blog' },
]

export function Navigation() {
    return (
        <header className="w-full bg-neutral-600/25 text-white">
            <div className="max-w-7xl mx-auto px-4 py-7 flex items-center justify-between">
                <div className="flex items-center gap-15">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center text-secondary font-bold">MX</div>
                        <span className="font-semibold">MoneyX</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-10 text-sm">
                        {navItems.map((n) => (
                            <a key={n.href} href={n.href} className="text-muted hover:text-white">
                                {n.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <button className="hidden md:inline-flex items-center gap-2 bg-primary text-amber-50 px-3 py-1.5 rounded-md text-sm">
                        <i className="bi bi-download text-accent-orange" aria-hidden />
                        Deposit
                    </button>

            

                    <div className="flex items-center gap-2">
                        <button aria-label="profile" className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
                            <i className="bi bi-person-circle text-white text-lg" />
                        </button>
                        <select className="bg-transparent text-sm">
                            <option>EN</option>
                            <option>AR</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navigation
