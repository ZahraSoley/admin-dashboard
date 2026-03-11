import { Command } from 'cmdk'
import { Eye, Link, Phone, Plus } from 'lucide-react';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

interface propsType {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

const CommandMenu = ({ open, setOpen }: propsType) => {

    const [value, setValue] = useState('')

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className='fixed inset-0 bg-stone-950/50'
            onClick={() => setOpen(false)}
        >
            <div onClick={(e) => e.stopPropagation()}
                className='bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12'
            >
                <Command.Input
                    value={value}
                    onValueChange={setValue} // react pass the event value to the setvalue under the hood 
                    placeholder='what do you need to do?'
                    className='focus:outline-1 focus:outline-stone-300 w-full border-b border-stone-300 p-3 text-lg placeholder:text-stone-400 relative'
                />
                <Command.List className='p-3 '>
                    <Command.Empty>No results found for
                        <span className='text-sky-600'> {value}</span>
                    </Command.Empty>

                    <Command.Group heading="Team" className='text-sm mb-3 text-stone-400'>
                        <Command.Item
                            className='flex items-center gap-2 cursor-pointer transition-colors hover:bg-stone-200 rounded p-2 text-sm text-stone-950 '
                        >
                            <Plus className='size-3.5 ' />
                            Invite Member
                        </Command.Item>
                        <Command.Item
                            className='flex items-center gap-2 cursor-pointer transition-colors hover:bg-stone-200 rounded p-2 text-sm text-stone-950 '
                        >
                            <Eye className='size-3.5 ' />
                            See Org Chart
                        </Command.Item>
                    </Command.Group>
                    <Command.Group heading="Integration" className='text-sm mb-3 text-stone-400'>
                        <Command.Item
                            className='flex items-center gap-2 cursor-pointer transition-colors hover:bg-stone-200 rounded p-2 text-sm text-stone-950 '
                        >
                            <Link className='size-3.5 ' />
                            Link Services
                        </Command.Item>
                        <Command.Item
                            className='flex items-center gap-2 cursor-pointer transition-colors hover:bg-stone-200 rounded p-2 text-sm text-stone-950 '
                        >
                            <Phone className='size-3.5 ' />
                            Contact Support
                        </Command.Item>
                    </Command.Group>
                    <Command.Item
                        className='flex items-center gap-2 cursor-pointer bg-stone-950 transition-colors hover:bg-stone-800 rounded p-2 text-sm text-stone-50 '
                    >
                        <Phone className='size-3.5 ' />
                        Contact Support
                    </Command.Item>

                </Command.List>
            </div>
        </Command.Dialog>
    )
}

export default CommandMenu;