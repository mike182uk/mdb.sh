import {
  GRAVATAR_USERNAME_HASH
} from '../constants'

export default function Avatar ({
  size,
  className
}) {
  return (
    <img
      alt='Gravatar for Michael Barrett'
      src={`//www.gravatar.com/avatar/${GRAVATAR_USERNAME_HASH}?s=${size}`}
      srcSet={`//www.gravatar.com/avatar/${GRAVATAR_USERNAME_HASH}?s=${size * 2} 2x`}
      height={size}
      width={size}
      className={`bg-gray-100 ${className}`}
    />
  )
}
