import Image from 'next/image'
import appPreviewImage from '../assets/app-nlw-copa-preview.png'
import iconImage from '../assets/icon-check.svg'
import logoImage from '../assets/logo.svg'
import usersImage from '../assets/users-avatar-example.png'

export default function Home() {
  return (
    <div className='max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center'>
    <main>
    <Image src={logoImage} alt="Logo" quality={100}/>
    <h1 className='mt-14 text-white-900 text-5xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
    <div className='mt-10 flex items-center gap-2'>
    <Image src={usersImage} alt="Users" quality={100}/>
    <strong className='text-gray-100 text-xl'>
      <span className='text-ignite-500'>+12.595 </span> pessoas estão usando
    </strong>
    </div>
    <form className='mt-10 flex gap-2'>
      <input 
      className='flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100'
      type="text" 
      required 
      placeholder="Qual é o nome do seu bolão"/>
      <button 
      type="submit"
      className='bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700'
      >
        Criar meu bolão
      </button>
    </form>
    <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
      Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
    </p>
    <div className='mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100'>
      <div className='flex items-center gap-6'>
      <Image src={iconImage} alt="Check" quality={100}/>
        <div className='flex flex-col'>
          <span className='font-bold text-2xl'>+2.034</span>
          <span>Bolões criados </span>
        </div>
      </div>
      <div className='w-px h-14 bg-gray-600'/>
      <div className='flex items-center gap-6'>
      <Image src={iconImage} alt="Check" quality={100}/>
        <div className='flex flex-col'>
          <span className='font-bold text-2xl'>+192.847</span>
          <span>Palpites enviados </span>
        </div>
      </div>
    </div>
    </main>
    <Image src={appPreviewImage} alt="Preview" quality={100} 
    />
    </div>
  )
}
