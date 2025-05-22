import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { Button } from '@/ui-components/button'

const DropdownLink = ({ children, ...props }) => (
    <Menu.Item>
        {({ active }) => (
            <Link
                {...props}
                className={`w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ${
                    active ? 'bg-gray-100' : ''
                } focus:outline-hidden transition duration-150 ease-in-out`}>
                {children}
            </Link>
        )}
    </Menu.Item>
)

export const DropdownButton = ({ children, ...props }) => (
    <Menu.Item>{() => <Button {...props}>{children}</Button>}</Menu.Item>
)

export default DropdownLink
