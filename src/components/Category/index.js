import React from 'react'
const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
import { Link, Image } from './styles.js'

export const Category = ({
  cover = DEFAULT_IMAGE,
  path = '#',
  emoji = '?',
}) => (
  <Link to={path}>
    <Image src={cover} alt="category Name" />
    {emoji}
  </Link>
)
