"use client";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import Button from './Button';
import { twMerge } from 'tailwind-merge';


interface ConnectButtonProps{
    className?:string;
}

const ConnectButton:React.FC<ConnectButtonProps> = ({
    className
}) => {
    // 4. Use modal hook
    const { open } = useWeb3Modal()
  
    return (
      <>
        <Button className={twMerge(``,className)} onClick={() => open()}>Open Connect Modal</Button>
        <Button className={twMerge(``,className)} onClick={() => open({ view: 'Networks' })}>Open Network Modal</Button>
      </>
    )
  }

export default ConnectButton;