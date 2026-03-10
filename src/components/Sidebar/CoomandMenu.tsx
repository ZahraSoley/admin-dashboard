import { Command } from 'cmdk'
import { useEffect, type Dispatch, type SetStateAction } from 'react'

interface propsType {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>
}

const CommandMenu = ({ open, setOpen }: propsType) => {

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
                placeholder='what do you need to do?'
                className='focus:outline-1 focus:outline-stone-300 w-full border-b border-stone-300 px-3 py-1.5 text-lg placeholder:text-stone-400 relative'
                />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>

                    <Command.Group heading="Letters">
                        <Command.Item>a</Command.Item>
                        <Command.Item>b</Command.Item>
                        <Command.Separator />
                        <Command.Item>c</Command.Item>
                    </Command.Group>

                    <Command.Item>Apple</Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}

export default CommandMenu;