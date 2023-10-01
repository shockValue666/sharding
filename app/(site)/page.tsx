import ConnectButton from '@/components/ConnectButton'
import Example from '@/components/Example'
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import Web3Mod from '@/components/Web3Mod'

export default function Home() {
  return (
    <div className='bg-neutral-900 rounded-lg h-full w-[50%] overflow-hidden overflow-y-auto border border-purple-500'>
        <Header>
            <div className='mb-2'>
                <h1 className='text-white text-3xl font-semibold'>
                    welcum back
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
                    <ListItem image='/images/liked.png' name='poutfsa' href="liked"/>
                </div>
            </div>
        </Header>
        <div className='mt-2 mb-7 px-6'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white text-2xl font-semibold'>Newest songs</h1>
            </div>
            <div>
                List of Songs!
            </div>
        </div>
        <div className="text-cyan-500 font-bold">
            tha ginw ekatommyriouxos prin ginw 25 xronwn!!!! (Site)
        </div>
        <Example/>
        {/* <Web3Mod>
            poutsa
        </Web3Mod>
        <ConnectButton/> */}
        {/* <Sidebar> */}
            gamw to theo
        {/* </Sidebar> */}
    </div>
  )
}
