
import { Button } from "@chakra-ui/react";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react'

export const EmptyModal = ({ buttonTitle, modalTitle, children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} mb={3}>
				{buttonTitle}
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} >
				<ModalOverlay />
				<ModalContent maxWidth='90%'>
					<ModalHeader>
            {modalTitle}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
            {children}
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onClose}
							type="submit">
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}