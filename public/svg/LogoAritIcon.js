import { Image } from 'antd'
import React from 'react'

const LogoAritIcon = ({ color }) => {
  const srcUrl = color === 'white' ? '/images/logo-arit-white.png' : '/images/logo-arit.png'
  return <Image preview={false} src={srcUrl} alt="Logo Arit" />
}

export default LogoAritIcon
