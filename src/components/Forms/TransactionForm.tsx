import { useState } from 'react'
import Input from '../Common/Input'
import Select from '../Common/Select'

const bankOptions = {
    send: [
        { label: 'Salam Bank', img: 'bi-bank' },
        { label: 'Other Bank 1', img: 'bi-building' },
        { label: 'Other Bank 2', img: 'bi-wallet2' },
    ],
    receive: [
        { label: 'Premier bank', img: 'bi-building' },
        { label: 'Other Bank 3', img: 'bi-piggy-bank' },
        { label: 'Other Bank 4', img: 'bi-cash-stack' },
    ],
}

export default function TransactionForm() {
    const [sendAmount, setSendAmount] = useState('0.01')
    const [sendCurrency] = useState('USD')
    const [sendBank, setSendBank] = useState(bankOptions.send[0].label)

    const [receiveAmount, setReceiveAmount] = useState('0.2210446')
    const [receiveCurrency] = useState('USD')
    const [receiveBank, setReceiveBank] = useState(bankOptions.receive[0].label)

    // mock exchange rate calculation
    const RATE = 22.10446

    function handleSendChange(value: string) {
        setSendAmount(value)
        const num = Number(value || 0)
        setReceiveAmount((num * RATE).toString())
    }

    function handleSwap() {
        // swap amounts and banks
        setSendAmount(receiveAmount)
        setReceiveAmount(sendAmount)
        setSendBank(receiveBank)
        setReceiveBank(sendBank)
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        // simple validation
        if (!sendAmount || Number(sendAmount) <= 0) {
            alert('Enter a valid amount to send')
            return
        }
        console.log('Submit', { sendAmount, sendCurrency, sendBank, receiveAmount, receiveCurrency, receiveBank })
        alert('Submitted')
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-7'>
            <div className="rounded-xl ring-2 ring-neutral-100/20 bg-neutral-400/10 p-4">

                <div className="flex gap-4 items-end">
                    <div className="flex-1">
                        <div className='mb-2 space-y-3'>
                            <div className="text-sm font-medium text-slate-300">You Send</div>
                            <div className="text-xs text-slate-500">I want to Recieve</div>
                        </div>
                        <div className="relative">
                            <Input
                                ariaLabel="send-amount"
                                value={sendAmount}
                                onChange={(v) => handleSendChange(v)}
                                placeholder="0.00"
                                type="number"
                                className="text-4xl font-light text-slate-100 pr-20"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-xs text-slate-400">
                                {sendCurrency}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="text-sm text-slate-500 mb-2">Asset</div>
                        <Select ariaLabel="send-bank" options={bankOptions.send} value={sendBank} onChange={setSendBank} />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center -mt-7 -mb-1 relative z-10">
                <button type="button" onClick={handleSwap} aria-label="swap" className="hover:cursor-pointer w-11 h-11 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center hover:bg-neutral-700 transition-colors">
                    <i className="bi bi-arrow-down-up text-accent-blue text-lg" />
                </button>
            </div>

            <div className="rounded-xl ring-2 ring-neutral-100/20 bg-neutral-400/10 p-6">


                <div className="flex gap-4 items-end">
                    <div className="flex-1">
                        <div className='mb-1 space-y-3'>
                            <div className="text-sm font-medium text-slate-300">You Receive</div>
                            <div className="text-xs text-slate-500">I want to Recieve</div>
                        </div>
                        <div className="relative">
                            <Input ariaLabel="receive-amount" value={receiveAmount} readOnly type="number" className="text-3xl font-light text-slate-100 pr-20" />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-xs text-slate-400">
                                {receiveCurrency}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="text-sm text-slate-500 mb-2">Asset</div>
                        <Select ariaLabel="receive-bank" options={bankOptions.receive} value={receiveBank} onChange={setReceiveBank} />
                    </div>
                </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-400">
                <i className="bi bi-exclamation-circle text-red-500 shrink-0 mt-0.5" />
                <div>This is only an estimated price based on current market rates. The final price will be confirmed when we receive the funds.</div>
            </div>

            <div>
                <button type="submit" className="w-full bg-primary hover:bg-[#00BF9A]  py-3.5 rounded-full  transition-colors">
                    Submit
                </button>
            </div>
        </form>
    )
}
