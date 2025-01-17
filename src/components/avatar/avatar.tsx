import React, { ForwardedRef, ReactNode, useMemo } from "react"

import Icon, { IconType } from "../icon/Icon"
import {
  AvatarContainerVariantProps,
  container,
  icon as iconV,
  IndicatorVariantProps,
} from "./avatar.styles"
import { useImageLoadingStatus } from "./hooks/useImageLoadingStatus"

export interface AvatarProps extends AvatarContainerVariantProps {
  image?: string
  imageAlt?: string
  icon?: IconType
  letter?: string
  className?: string
  indicatorClassName?: string
  indicatorType?: IndicatorVariantProps["type"]
  fallback?: ReactNode
}

/**
 * Avatar component with indicator
 */
const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      image,
      imageAlt,
      icon,
      letter,
      size,
      type,
      className,

      fallback,
    }: AvatarProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const containerStyles = useMemo(
      () => container({ size, className, type }),
      [size, className, type],
    )
    const iconStyles = useMemo(() => iconV({ size }), [size])

    return (
      <div className="relative w-max h-max">
        <div className={containerStyles} ref={ref}>
          {image && <Image src={image} alt={imageAlt} fallback={fallback} />}
          {letter && <span>{letter}</span>}
          {icon && <Icon className={iconStyles} icon={icon} />}
        </div>
      </div>
    )
  },
)

Avatar.displayName = "Avatar"

interface ImageProps {
  src?: string
  fallback?: React.ReactNode
  alt?: string
}

const Image = ({ src, fallback, alt }: ImageProps) => {
  const status = useImageLoadingStatus(src)
  if (status !== "loaded" && fallback) return <div>{fallback}</div>

  return <img className="w-full h-full" src={src} alt={alt} />
}

export { Avatar }
