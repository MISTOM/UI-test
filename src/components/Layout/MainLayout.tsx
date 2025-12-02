// Main layout
import Navigation from './Navigation'
import Sidebar from './Sidebar'

interface Props {
    children: React.ReactNode
}

export function MainLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-secondary text-white">
            <Navigation />
            <div className="max-w-auto mx-auto py-8 flex gap-6">
                <Sidebar />
                <main className="flex-1">{children}</main>
            </div>
        </div>
    )
}

export default MainLayout
