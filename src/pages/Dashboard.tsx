import MainLayout from '../components/Layout/MainLayout'
import TransactionForm from '../components/Forms/TransactionForm'

export default function Dashboard() {
    return (
        <MainLayout>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">MoneyX</h2>
                <h3 className="text-3xl text-neutral-500 font-semibold  mb-6">Transaction Info</h3>

                <div className="rounded-lg bg-transparent p-6">
                    <TransactionForm />
                </div>
            </div>
        </MainLayout>
    )
}
