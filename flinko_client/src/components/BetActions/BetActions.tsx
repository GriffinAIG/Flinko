import { LinesType } from '@/types'
import { Coin, CurrencyDollarSimple, Smiley } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

type Props = {
    onRunBet: (betValue: number) => void
    onChangeLines: (lines: LinesType) => void
    inGameBallsCount: number
}

const BetActions = ({
    onRunBet,
    onChangeLines,
    inGameBallsCount
}: Props) => {
    const maxLinesQnt = 16
    const linesOptions: number[] = []
    for (let i = 8; i <= maxLinesQnt; i++) {
        linesOptions.push(i)
    }


    return (
        <div className="relative h-1/2 w-full flex-1 py-8 px-4">
            <span className="absolute left-4 top-0 mx-auto text-xs font-bold text-text md:text-base">
                *bolas em jogo {inGameBallsCount}/15
            </span>

            <div className="flex h-full flex-col gap-4 rounded-md bg-primary p-4 text-text md:justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-stretch gap-1 md:flex-col">
                        <div className="w-full text-sm font-bold md:text-base">
                            <div className="flex flex-1 items-stretch justify-between">
                                <span>Valor da aposta</span>
                                <div className="flex items-center gap-1">
                                    <div className="rounded-full bg-purpleDark p-0.5">
                                        <CurrencyDollarSimple weight="bold" />
                                    </div>
                                    <span>10</span>
                                </div>
                            </div>
                            <div className="flex items-stretch justify-center shadow-md">
                                <input
                                    type="number"
                                    min={0}
                                    max={100}
                                    // onChange={handleChangeBetValue}
                                    value={10}
                                    className="w-full rounded-bl-md rounded-tl-md border-2 border-secondary bg-background p-2.5 px-4 font-bold transition-colors placeholder:font-bold placeholder:text-text focus:border-purple focus:outline-none md:p-2"
                                />
                                <button
                                    // onClick={handleHalfBet}
                                    className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:top-[calc(50%_-_8px)] after:right-0 after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                                >
                                    ½
                                </button>
                                <button
                                    // onClick={handleDoubleBet}
                                    className="relative border-2 border-transparent bg-secondary p-2.5 px-3 transition-colors after:absolute after:top-[calc(50%_-_8px)] after:right-0 after:h-4 after:w-0.5 after:rounded-lg after:bg-background after:content-[''] hover:bg-secondary/80 focus:border-purple focus:outline-none md:p-2"
                                >
                                    2x
                                </button>
                                <button
                                    // onClick={handleMaxBet}
                                    className="rounded-br-md rounded-tr-md border-2 border-transparent bg-secondary p-2 px-3 text-xs transition-colors hover:bg-secondary/80 focus:border-purple focus:outline-none"
                                >
                                    max
                                </button>
                            </div>
                        </div>

                        <button
                            // onClick={handleRunBet}
                            // disabled={isLoading}
                            className="block rounded-md bg-purple px-2 py-4 text-sm font-bold leading-none text-background transition-colors hover:bg-purpleDark focus:outline-none focus:ring-1 focus:ring-purple focus:ring-offset-1 focus:ring-offset-primary disabled:bg-gray-500 md:hidden"
                        >
                            Apostar
                        </button>
                    </div>
                    <select
                        disabled={inGameBallsCount > 0}
                        // onChange={handleChangeLines}
                        defaultValue={16}
                        className="w-full rounded-md border-2 border-secondary bg-background py-2 px-4 font-bold transition-all placeholder:font-bold placeholder:text-text focus:border-purple focus:outline-none disabled:line-through disabled:opacity-80"
                        id="lines"
                    >
                        {linesOptions.map(line => (
                            <option key={line} value={line}>
                                {line} Linhas
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    // onClick={handleRunBet}
                    // disabled={isLoading}
                    className="hidden rounded-md bg-purple px-6 py-5 font-bold leading-none text-background transition-colors hover:bg-purpleDark focus:outline-none focus:ring-1 focus:ring-purple focus:ring-offset-1 focus:ring-offset-primary disabled:bg-gray-500 md:visible md:block"
                >
                    Apostar
                </button>
                <div className="flex flex-col items-center gap-4 text-sm font-bold text-text md:items-start lg:absolute lg:-bottom-20 lg:left-4">
                    <span>
                        Se se divertiu jogando e quiser ajudar de alguma forma,
                        <span className="flex items-center gap-2">
                            doe 1 real pra o desenvolvedor clicando abaixo.
                            <Smiley weight="fill" />
                        </span>
                    </span>
                    <Link
                        href="/contribute"
                        className="flex items-center gap-2 rounded-md bg-background p-2 font-bold transition-colors hover:bg-primary/50 lg:bg-primary"
                    >
                        DOAR 1 REAL <Coin />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BetActions