import { useLoading } from './context/LoadingContext'

export default function Loader() {
  const { isLoading } = useLoading()

  if (!isLoading) return null
  return (
    <div className="preloader">
      <div className="lds-ellipsis">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
// <!-- END LOADER -->
