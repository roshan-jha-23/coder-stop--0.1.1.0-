import AddFriendButton from '@/components/AddFriendButton'
import { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <section>
    <h1>Add a friend</h1>
    <AddFriendButton/>
  </section>
}

export default page