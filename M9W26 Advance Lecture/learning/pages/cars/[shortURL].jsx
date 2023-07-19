import {useRouter} from 'next/router';

export default function CarsPages () {
  const router = useRouter();
  return (
    <div>
      <h1>Everything else in the cars pages!</h1>
      <h2>You are on {router.query.id} page</h2>
    </div>
  )
}


