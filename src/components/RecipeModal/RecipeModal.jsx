import { Dialog, DialogPanel, DialogTitle, Button } from '@headlessui/react'
import { useState } from 'react'

export default function RecipeModal() {
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <>
            <button onClick={open} className="modal-btn">
                Порада...
            </button>

            <Dialog open={isOpen} onClose={close} className="modal-overlay">
                <div className="modal-wrapper">
                    <DialogPanel className="modal-panel">
                        <DialogTitle className="modal-title">
                            Порада від Петровича
                        </DialogTitle>

                        <p className="modal-text">
                            Найкраща дієта - соковитая котлета!
                        </p>

                        <Button onClick={close} className="modal-close">
                            Зрозуміло окей
                        </Button>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}
