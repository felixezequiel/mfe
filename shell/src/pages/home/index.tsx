import { lazy, Suspense } from 'react';
import { useZustandStore } from 'zustand_mfe/Store';

const ZustandPage = lazy(() => import('zustand_mfe/App'));
const TanstackPage = lazy(() => import('tanstack_mfe/App'));

const ViewCounter = () => {
    const { count } = useZustandStore();

    return <span>{count}</span>
}

export const HomePage = () => {
    return (
        <div className="grid w-full h-full gap-4 direction-row grid-cols-2 space-x-1">
            <div className="col-span-1 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Home Page</h1>
                <p className="text-lg">
                    Zustand Counter on shell: <ViewCounter />
                </p>

            </div>

            <div className='col-span-1'>
                <Suspense fallback={<div>Loading Zustand Page...</div>}>
                    <ZustandPage />
                </Suspense>
            </div>

            <div className='col-span-1'>
                <Suspense fallback={<div>Loading Tanstack Page...</div>}>
                    <TanstackPage />
                </Suspense>
            </div>
        </div>
    )
}